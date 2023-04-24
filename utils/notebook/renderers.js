/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */
/* -----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * jupyter lab notebook output 渲染模块
 * 本模块基于 @jupyterlab\rendermime\lib\renderers.js 二次开发
 * 移除了部分功能，如：a 标签url处理，markdown 标题的自动生成对应链接等。
 * 此外还去除了所需传参：resolver、linkHandler、translator
 *
 * 源码TS版：https://github.com/jupyterlab/jupyterlab/blob/master/packages/rendermime/src/renderers.ts
 *
 */

import { removeMath, replaceMath } from "./latex";
import { URLExt } from "@jupyterlab/coreutils";
import escape from "lodash.escape";
/**
 * Render HTML into a host node.
 *
 * @param options - The options for rendering.
 *
 * @returns A promise which resolves when rendering is complete.
 */
export function renderHTML(options) {
  // Unpack the options.
  let { host, source, trusted, sanitizer, shouldTypeset, latexTypesetter } =
    options;
  let originalSource = source;
  // Bail early if the source is empty.
  if (!source) {
    host.textContent = "";
    return Promise.resolve(undefined);
  }
  // Sanitize the source if it is not trusted. This removes all
  // `<script>` tags as well as other potentially harmful HTML.
  if (!trusted) {
    originalSource = `${source}`;
    source = sanitizer.sanitize(source);
  }
  // Set the inner HTML of the host.
  host.innerHTML = source;
  if (host.getElementsByTagName("script").length > 0) {
    // If output it trusted, eval any script tags contained in the HTML.
    // This is not done automatically by the browser when script tags are
    // created by setting `innerHTML`.
    if (trusted) {
      Private.evalInnerHTMLScriptTags(host);
    }
  }
  // Handle default behavior of nodes.
  Private.handleDefaults(host);
  // Patch the urls if a resolver is available.
  let promise;
  promise = Promise.resolve(undefined);
  // Return the final rendered promise.
  return promise.then(() => {
    if (shouldTypeset && latexTypesetter) {
      latexTypesetter.typeset(host);
    }
  });
}
/**
 * Render an image into a host node.
 *
 * @param options - The options for rendering.
 *
 * @returns A promise which resolves when rendering is complete.
 */
export function renderImage(options) {
  // Unpack the options.
  const { host, mimeType, source, width, height, needsBackground, unconfined } =
    options;
  // Clear the content in the host.
  host.textContent = "";
  // Create the image element.
  const img = document.createElement("img");
  // Set the source of the image.
  img.src = `data:${mimeType};base64,${source}`;
  // Set the size of the image if provided.
  if (typeof height === "number") {
    img.height = height;
  }
  if (typeof width === "number") {
    img.width = width;
  }
  if (needsBackground === "light") {
    img.classList.add("jp-needs-light-background");
  } else if (needsBackground === "dark") {
    img.classList.add("jp-needs-dark-background");
  }
  if (unconfined === true) {
    img.classList.add("jp-mod-unconfined");
  }
  // Add the image to the host.
  host.appendChild(img);
  // Return the rendered promise.
  return Promise.resolve(undefined);
}
/**
 * Render LaTeX into a host node.
 *
 * @param options - The options for rendering.
 *
 * @returns A promise which resolves when rendering is complete.
 */
export function renderLatex(options) {
  // Unpack the options.
  const { host, source, shouldTypeset, latexTypesetter } = options;
  // Set the source on the node.
  host.textContent = source;
  // Typeset the node if needed.
  if (shouldTypeset && latexTypesetter) {
    latexTypesetter.typeset(host);
  }
  // Return the rendered promise.
  return Promise.resolve(undefined);
}
/**
 * Render Markdown into a host node.
 *
 * @param options - The options for rendering.
 *
 * @returns A promise which resolves when rendering is complete.
 */
export async function renderMarkdown(options) {
  // Unpack the options.
  const { host, source, markdownParser, ...others } = options;
  // Clear the content if there is no source.
  if (!source) {
    host.textContent = "";
    return;
  }
  let html = "";

  if (markdownParser) {
    // Separate math from normal markdown text.
    const parts = removeMath(source);
    // Convert the markdown to HTML.
    html = await markdownParser.render(parts["text"]);
    // Replace math.
    html = replaceMath(html, parts["math"]);
  } else {
    // Fallback if the application does not have any markdown parser.
    html = `<pre>${source}</pre>`;
  }
  // Render HTML.
  await renderHTML({
    host,
    source: html,
    ...others,
  });
}
/**
 * The namespace for the `renderMarkdown` function statics.
 */
(function (renderMarkdown) {
  /**
   * Create a normalized id for a header element.
   *
   * @param header Header element
   * @returns Normalized id
   */
  function createHeaderId(header) {
    var _a;
    return (
      (_a = header.textContent) !== null && _a !== void 0 ? _a : ""
    ).replace(/ /g, "-");
  }
  renderMarkdown.createHeaderId = createHeaderId;
})(renderMarkdown || (renderMarkdown = {}));
/**
 * Render SVG into a host node.
 *
 * @param options - The options for rendering.
 *
 * @returns A promise which resolves when rendering is complete.
 */
export function renderSVG(options) {
  // Unpack the options.
  let { host, source, trusted, unconfined } = options;
  // Clear the content if there is no source.
  if (!source) {
    host.textContent = "";
    return Promise.resolve(undefined);
  }
  // Display a message if the source is not trusted.
  if (!trusted) {
    host.textContent =
      "Cannot display an untrusted SVG. Maybe you need to run the cell?";
    return Promise.resolve(undefined);
  }
  // Add missing SVG namespace (if actually missing)
  const patt = "<svg[^>]+xmlns=[^>]+svg";
  if (source.search(patt) < 0) {
    source = source.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  // Render in img so that user can save it easily
  const img = new Image();
  img.src = `data:image/svg+xml,${encodeURIComponent(source)}`;
  host.appendChild(img);
  if (unconfined === true) {
    host.classList.add("jp-mod-unconfined");
  }
  return Promise.resolve();
}
/**
 * Replace URLs with links.
 *
 * @param content - The text content of a node.
 *
 * @returns A list of text nodes and anchor elements.
 */
function autolink(content) {
  // Taken from Visual Studio Code:
  // https://github.com/microsoft/vscode/blob/9f709d170b06e991502153f281ec3c012add2e42/src/vs/workbench/contrib/debug/browser/linkDetector.ts#L17-L18
  const controlCodes = "\\u0000-\\u0020\\u007f-\\u009f";
  const webLinkRegex = new RegExp(
    "(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|data:|www\\.)[^\\s" +
      controlCodes +
      '"]{2,}[^\\s' +
      controlCodes +
      "\"'(){}\\[\\],:;.!?]",
    "ug"
  );
  const nodes = [];
  let lastIndex = 0;
  let match;
  while (null != (match = webLinkRegex.exec(content))) {
    if (match.index !== lastIndex) {
      nodes.push(
        document.createTextNode(content.slice(lastIndex, match.index))
      );
    }
    let url = match[0];
    // Special case when the URL ends with ">" or "<"
    const lastChars = url.slice(-1);
    const endsWithGtLt = [">", "<"].indexOf(lastChars) !== -1;
    const len = endsWithGtLt ? url.length - 1 : url.length;
    const anchor = document.createElement("a");
    url = url.slice(0, len);
    anchor.href = url.startsWith("www.") ? "https://" + url : url;
    anchor.rel = "noopener";
    anchor.target = "_blank";
    anchor.appendChild(document.createTextNode(url.slice(0, len)));
    nodes.push(anchor);
    lastIndex = match.index + len;
  }
  if (lastIndex !== content.length) {
    nodes.push(
      document.createTextNode(content.slice(lastIndex, content.length))
    );
  }
  return nodes;
}
/**
 * Split a shallow node (node without nested nodes inside) at a given text content position.
 *
 * @param node the shallow node to be split
 * @param at the position in textContent at which the split should occur
 */
function splitShallowNode(node, at) {
  var _a, _b;
  const pre = node.cloneNode();
  pre.textContent =
    (_a = node.textContent) === null || _a === void 0
      ? void 0
      : _a.substr(0, at);
  const post = node.cloneNode();
  post.textContent =
    (_b = node.textContent) === null || _b === void 0 ? void 0 : _b.substr(at);
  return {
    pre: pre,
    post: post,
  };
}
/**
 * Render text into a host node.
 *
 * @param options - The options for rendering.
 *
 * @returns A promise which resolves when rendering is complete.
 */
export function renderText(options) {
  var _a, _b;
  // Unpack the options.
  const { host, sanitizer, source } = options;
  // Create the HTML content.
  const content = sanitizer.sanitize(Private.ansiSpan(source), {
    allowedTags: ["span"],
  });
  // Set the sanitized content for the host node.
  const pre = document.createElement("pre");
  pre.innerHTML = content;
  const preTextContent = pre.textContent;
  if (preTextContent) {
    // Note: only text nodes and span elements should be present after sanitization in the `<pre>` element.
    const linkedNodes = autolink(preTextContent);
    let inAnchorElement = false;
    const combinedNodes = [];
    const preNodes = Array.from(pre.childNodes);
    while (preNodes.length && linkedNodes.length) {
      // Use non-null assertions to workaround TypeScript context awareness limitation
      // (if any of the arrays were empty, we would not enter the body of the loop).
      let preNode = preNodes.shift();
      let linkNode = linkedNodes.shift();
      // This should never happen because we modify the arrays in flight so they should end simultaneously,
      // but this makes the coding assistance happy and might make it easier to conceptualize.
      if (typeof preNode === "undefined") {
        combinedNodes.push(linkNode);
        break;
      }
      if (typeof linkNode === "undefined") {
        combinedNodes.push(preNode);
        break;
      }
      let preLen =
        (_a = preNode.textContent) === null || _a === void 0
          ? void 0
          : _a.length;
      let linkLen =
        (_b = linkNode.textContent) === null || _b === void 0
          ? void 0
          : _b.length;
      if (preLen && linkLen) {
        if (preLen > linkLen) {
          // Split pre node and only keep the shorter part
          let { pre: keep, post: postpone } = splitShallowNode(
            preNode,
            linkLen
          );
          preNodes.unshift(postpone);
          preNode = keep;
        } else if (linkLen > preLen) {
          let { pre: keep, post: postpone } = splitShallowNode(
            linkNode,
            preLen
          );
          linkedNodes.unshift(postpone);
          linkNode = keep;
        }
      }
      const lastCombined = combinedNodes[combinedNodes.length - 1];
      // If we are already in an anchor element and the anchor element did not change,
      // we should insert the node from <pre> which is either Text node or coloured span Element
      // into the anchor content as a child
      if (inAnchorElement && linkNode.href === lastCombined.href) {
        lastCombined.appendChild(preNode);
      } else {
        // the `linkNode` is either Text or AnchorElement;
        const isAnchor = linkNode.nodeType !== Node.TEXT_NODE;
        // if we are NOT about to start an anchor element, just add the pre Node
        if (!isAnchor) {
          combinedNodes.push(preNode);
          inAnchorElement = false;
        } else {
          // otherwise start a new anchor; the contents of the `linkNode` and `preNode` should be the same,
          // so we just put the neatly formatted `preNode` inside the anchor node (`linkNode`)
          // and append that to combined nodes.
          linkNode.textContent = "";
          linkNode.appendChild(preNode);
          combinedNodes.push(linkNode);
          inAnchorElement = true;
        }
      }
    }
    // TODO: replace with `.replaceChildren()` once the target ES version allows it
    pre.innerHTML = "";
    for (const child of combinedNodes) {
      pre.appendChild(child);
    }
  }
  host.appendChild(pre);
  // Return the rendered promise.
  return Promise.resolve(undefined);
}
/**
 * The namespace for module implementation details.
 */
var Private;
(function (Private) {
  /**
   * Eval the script tags contained in a host populated by `innerHTML`.
   *
   * When script tags are created via `innerHTML`, the browser does not
   * evaluate them when they are added to the page. This function works
   * around that by creating new equivalent script nodes manually, and
   * replacing the originals.
   */
  function evalInnerHTMLScriptTags(host) {
    // Create a snapshot of the current script nodes.
    const scripts = Array.from(host.getElementsByTagName("script"));
    // Loop over each script node.
    for (const script of scripts) {
      // Skip any scripts which no longer have a parent.
      if (!script.parentNode) {
        continue;
      }
      // Create a new script node which will be clone.
      const clone = document.createElement("script");
      // Copy the attributes into the clone.
      const attrs = script.attributes;
      for (let i = 0, n = attrs.length; i < n; ++i) {
        const { name, value } = attrs[i];
        clone.setAttribute(name, value);
      }
      // Copy the text content into the clone.
      clone.textContent = script.textContent;
      // Replace the old script in the parent.
      script.parentNode.replaceChild(clone, script);
    }
  }
  Private.evalInnerHTMLScriptTags = evalInnerHTMLScriptTags;
  /**
   * Handle the default behavior of nodes.
   */
  function handleDefaults(node) {
    // Handle anchor elements.
    const anchors = node.getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
      const el = anchors[i];
      // skip when processing a elements inside svg
      // which are of type SVGAnimatedString
      if (!(el instanceof HTMLAnchorElement)) {
        continue;
      }
      const path = el.href;
      const isLocal = URLExt.isLocal(path);
      // set target attribute if not already present
      if (!el.target) {
        el.target = isLocal ? "_self" : "_blank";
      }
      // set rel as 'noopener' for non-local anchors
      if (!isLocal) {
        el.rel = "noopener";
      }
    }
    // Handle image elements.
    const imgs = node.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
      if (!imgs[i].alt) {
        imgs[i].alt = "Image";
      }
    }
  }
  Private.handleDefaults = handleDefaults;

  const ANSI_COLORS = [
    "ansi-black",
    "ansi-red",
    "ansi-green",
    "ansi-yellow",
    "ansi-blue",
    "ansi-magenta",
    "ansi-cyan",
    "ansi-white",
    "ansi-black-intense",
    "ansi-red-intense",
    "ansi-green-intense",
    "ansi-yellow-intense",
    "ansi-blue-intense",
    "ansi-magenta-intense",
    "ansi-cyan-intense",
    "ansi-white-intense",
  ];
  /**
   * Create HTML tags for a string with given foreground, background etc. and
   * add them to the `out` array.
   */
  function pushColoredChunk(chunk, fg, bg, bold, underline, inverse, out) {
    if (chunk) {
      const classes = [];
      const styles = [];
      if (bold && typeof fg === "number" && 0 <= fg && fg < 8) {
        fg += 8; // Bold text uses "intense" colors
      }
      if (inverse) {
        [fg, bg] = [bg, fg];
      }
      if (typeof fg === "number") {
        classes.push(ANSI_COLORS[fg] + "-fg");
      } else if (fg.length) {
        styles.push(`color: rgb(${fg})`);
      } else if (inverse) {
        classes.push("ansi-default-inverse-fg");
      }
      if (typeof bg === "number") {
        classes.push(ANSI_COLORS[bg] + "-bg");
      } else if (bg.length) {
        styles.push(`background-color: rgb(${bg})`);
      } else if (inverse) {
        classes.push("ansi-default-inverse-bg");
      }
      if (bold) {
        classes.push("ansi-bold");
      }
      if (underline) {
        classes.push("ansi-underline");
      }
      if (classes.length || styles.length) {
        out.push("<span");
        if (classes.length) {
          out.push(` class="${classes.join(" ")}"`);
        }
        if (styles.length) {
          out.push(` style="${styles.join("; ")}"`);
        }
        out.push(">");
        out.push(chunk);
        out.push("</span>");
      } else {
        out.push(chunk);
      }
    }
  }
  /**
   * Convert ANSI extended colors to R/G/B triple.
   */
  function getExtendedColors(numbers) {
    let r;
    let g;
    let b;
    const n = numbers.shift();
    if (n === 2 && numbers.length >= 3) {
      // 24-bit RGB
      r = numbers.shift();
      g = numbers.shift();
      b = numbers.shift();
      if ([r, g, b].some((c) => c < 0 || 255 < c)) {
        throw new RangeError("Invalid range for RGB colors");
      }
    } else if (n === 5 && numbers.length >= 1) {
      // 256 colors
      const idx = numbers.shift();
      if (idx < 0) {
        throw new RangeError("Color index must be >= 0");
      } else if (idx < 16) {
        // 16 default terminal colors
        return idx;
      } else if (idx < 232) {
        // 6x6x6 color cube, see https://stackoverflow.com/a/27165165/500098
        r = Math.floor((idx - 16) / 36);
        r = r > 0 ? 55 + r * 40 : 0;
        g = Math.floor(((idx - 16) % 36) / 6);
        g = g > 0 ? 55 + g * 40 : 0;
        b = (idx - 16) % 6;
        b = b > 0 ? 55 + b * 40 : 0;
      } else if (idx < 256) {
        // grayscale, see https://stackoverflow.com/a/27165165/500098
        r = g = b = (idx - 232) * 10 + 8;
      } else {
        throw new RangeError("Color index must be < 256");
      }
    } else {
      throw new RangeError("Invalid extended color specification");
    }
    return [r, g, b];
  }
  /**
   * Transform ANSI color escape codes into HTML <span> tags with CSS
   * classes such as "ansi-green-intense-fg".
   * The actual colors used are set in the CSS file.
   * This also removes non-color escape sequences.
   * This is supposed to have the same behavior as nbconvert.filters.ansi2html()
   */
  function ansiSpan(str) {
    const ansiRe = /\x1b\[(.*?)([@-~])/g; // eslint-disable-line no-control-regex
    let fg = [];
    let bg = [];
    let bold = false;
    let underline = false;
    let inverse = false;
    let match;
    const out = [];
    const numbers = [];
    let start = 0;
    str = escape(str);
    str += "\x1b[m"; // Ensure markup for trailing text
    // tslint:disable-next-line
    while ((match = ansiRe.exec(str))) {
      if (match[2] === "m") {
        const items = match[1].split(";");
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item === "") {
            numbers.push(0);
          } else if (item.search(/^\d+$/) !== -1) {
            numbers.push(parseInt(item, 10));
          } else {
            // Ignored: Invalid color specification
            numbers.length = 0;
            break;
          }
        }
      } else {
        // Ignored: Not a color code
      }
      const chunk = str.substring(start, match.index);
      pushColoredChunk(chunk, fg, bg, bold, underline, inverse, out);
      start = ansiRe.lastIndex;
      while (numbers.length) {
        const n = numbers.shift();
        switch (n) {
          case 0:
            fg = bg = [];
            bold = false;
            underline = false;
            inverse = false;
            break;
          case 1:
          case 5:
            bold = true;
            break;
          case 4:
            underline = true;
            break;
          case 7:
            inverse = true;
            break;
          case 21:
          case 22:
            bold = false;
            break;
          case 24:
            underline = false;
            break;
          case 27:
            inverse = false;
            break;
          case 30:
          case 31:
          case 32:
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
            fg = n - 30;
            break;
          case 38:
            try {
              fg = getExtendedColors(numbers);
            } catch (e) {
              numbers.length = 0;
            }
            break;
          case 39:
            fg = [];
            break;
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
            bg = n - 40;
            break;
          case 48:
            try {
              bg = getExtendedColors(numbers);
            } catch (e) {
              numbers.length = 0;
            }
            break;
          case 49:
            bg = [];
            break;
          case 90:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 97:
            fg = n - 90 + 8;
            break;
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
            bg = n - 100 + 8;
            break;
          default:
          // Unknown codes are ignored
        }
      }
    }
    return out.join("");
  }
  Private.ansiSpan = ansiSpan;
})(Private || (Private = {}));
