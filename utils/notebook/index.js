import "@jupyterlab/theme-light-extension/style/theme.css";
import "../../.vitepress/theme/css/jupyterlab/index.css";
import { createCodemirror } from "./codemirror";
import { defaultSanitizer } from "./sanitizer";
import { MathJaxTypesetter } from "./lib/index.js";
import {
  renderHTML,
  renderImage,
  renderLatex,
  renderMarkdown,
  renderSVG,
  renderText,
} from "./renderers";
import defaultMarkdownParser from "./markdown.js"; // 引入cngbdb-ui的markdown渲染逻辑

export class Notebook {
  #source; // notebook源数据
  #cells; // notebook cell列表;cell表示一个最基础的渲染单元，例如inputCell,outputCell,outputResultCell
  #fragment; // notebook 渲染结果片段，是个div元素
  #trusted; // 当前渲染字符是安全或者但求运行环境是否可信，涉及Script,SVG渲染
  #sanitizer; // 字符串无害化处理
  #shouldTypeset; // 是否对数学公式字符进行latex排版,这里默认为true
  #latexTypesetter; // latex 插件实例
  #markdownParser; // markdown 渲染工具

  /**
   * 构造函数
   * @param {Object} sourceOfJson Notebook 源数据，JSON 对象
   * @param {Boolean} trusted 当前渲染字符是安全或者当前运行环境是否可信，涉及Script,SVG渲染,默认为False
   * @param {Boolean} shouldTypeset 是否对数学公式字符进行latex排版,默认为true
   * @param {*} markdownParser markdown 渲染工具
   */
  constructor(source, trusted, shouldTypeset, markdownParser) {
    if (!source.cells || !(source.cells instanceof Array))
      throw "The Notebook is Error! Cells attribute is required and is Array!";
    this.#source = JSON.parse(JSON.stringify(source));
    const { cells } = this.#source;
    this.#cells = cells;
    this.#fragment = document.createElement("div"); // 创建一个新的空白的div片段，notebook渲染的结果都暂时存储在其中

    /*---------- 默认配置项 START ----------*/
    this.#trusted = trusted || false; // 当前运行环境是否安全可信，涉及Script,SVG渲染
    this.#sanitizer = defaultSanitizer; // 字符串无害化处理
    this.#shouldTypeset = shouldTypeset || true; // 是否对数学公式字符进行latex排版,这里默认为true
    this.#latexTypesetter = new MathJaxTypesetter({
      url: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js",
      config: "TeX-AMS_HTML-full,Safe",
    }); // latex 插件实例化
    this.#markdownParser = markdownParser || defaultMarkdownParser; // markdown 渲染工具
    /*---------- 默认配置项 END ----------*/
  }

  // notebook渲染成HTML的结果
  get notebookHTML() {
    return this.#fragment;
  }

  /**
   * cells 渲染
   * 此处是 notebook 渲染的总入口
   *
   * 每个 cell 由input和output两个模块组成；
   * input 分为三类数据，即cell_type = markdown/code/raw。其中只有code会有output；
   * output 处理详见 renderCommonCell 方法；
   *
   * @author 王志杰
   * @returns {DocumentFragment} 返回一个 DocumentFragment 对象
   */
  async render() {
    try {
      for (let cell of this.#cells) {
        let node = null;
        let { cell_type, source } = cell;
        cell.source = typeof source === "string" ? source : source.join("");
        switch (cell_type) {
          case "markdown":
            node = await this.#renderMarkdownCell(cell);
            break;
          case "code":
            node = await this.#renderCodeCell(cell);
            break;
          case "raw":
            node = await this.#renderRawCell(cell);
            break;
        }
        this.#fragment.appendChild(node);
      }
    } catch (error) {
      console.error(error);
    }
    return this.#fragment;
  }

  /**
   * 数据渲染总模块，input和output的数据渲染都经由这里分发到具体的渲染模块
   *
   * @param {string} param0 type-数据模块类型，所支持的类型为output_type全部类型‘
   * @param {object} param1 options-渲染模块所需的参数
   */
  async #renderCommonCell({ type, options }) {
    // 对未设置的配置项，设置为全局默认配置对应的属性值
    options.trusted = options.trusted || this.#trusted;
    options.sanitizer = options.sanitizer || this.#sanitizer;
    options.shouldTypeset = options.shouldTypeset || this.#shouldTypeset;
    options.latexTypesetter = options.latexTypesetter || this.#latexTypesetter;
    options.markdownParser = options.markdownParser || this.#markdownParser;

    switch (type) {
      case "text/html":
        await renderHTML(options);
        break;
      case "markdown":
      case "text/markdown":
        await renderMarkdown(options);
        break;
      case "text/plain":
      case "application/vnd.jupyter.stdout":
      case "application/vnd.jupyter.stderr":
        await renderText(options);
        break;
      case "text/latex":
        await renderLatex(options);
        break;
      case "image/bmp":
      case "image/png":
      case "image/jpeg":
      case "image/gif":
      case "image/webp":
        await renderImage(options);
        break;
      case "image/svg+xml":
        await renderSVG(options);
        break;
      case "text/javascript":
      case "application/javascript":
        // 禁止输出 JavaScript
        options.source = "JavaScript output is disabled in JupyterLab";
        await renderText(options);
        break;
      default:
        break;
    }
  }

  /**
   * 渲染markdown DOM
   * @param {Object} cell
   */
  async #renderMarkdownCell(cell) {
    let { source, execution_count: executionCount } = cell;
    let contentNode = document.createElement("div");
    await this.#renderCommonCell({
      type: "text/markdown",
      options: { host: contentNode, source: source },
    });
    return this.#createContainerNode(
      "inputMarkdown",
      contentNode,
      executionCount
    );
  }

  /**
   * 渲染Code DOM
   * @param {Object} cell
   */
  async #renderCodeCell(cell) {
    let node = null;
    let { source, outputs, execution_count: executionCount } = cell;
    let contentNode = document.createElement("div");
    contentNode.className =
      "lm-Widget p-Widget jp-Cell jp-CodeCell jp-Notebook-cell ";
    createCodemirror(source, contentNode); // input代码块渲染
    node = this.#createContainerNode("inputCode", contentNode, executionCount);
    await this.#renderOutputCell(outputs, contentNode.parentNode.parentNode);

    return node;
  }

  async #renderRawCell(cell) {
    let { source } = cell;
    let node = document.createElement("div");
    await this.#renderCommonCell({
      type: "text/plain",
      options: { host: node, source: source },
    });
    return node;
  }

  /**
   * 渲染 outputs
   * @param {Array} outputs
   */
  async #renderOutputCell(outputs, parentNode) {
    if (!outputs || !outputs.length) return;
    const OutputAreaNode = document.createElement("div");
    OutputAreaNode.className =
      "lm-Widget jp-OutputArea jp-Cell-outputArea q-mt-sm";
    parentNode.appendChild(OutputAreaNode);
    for (let output of outputs) {
      let sources = [];
      switch (output.output_type) {
        case "stream": // 文本流输出
          sources = output.text;
          for (const source of sources) {
            let node = document.createElement("div");
            await this.#renderCommonCell({
              type: "application/vnd.jupyter." + output.name,
              options: { host: node, source: source },
            });

            OutputAreaNode.appendChild(
              this.#createContainerNode(
                "application/vnd.jupyter." + output.name,
                node,
                ""
              )
            );
          }
          break;
        case "display_data":
        case "execute_result": {
          // 富文本输出
          const { data: outputData, execution_count: executionCount } = output;
          const keys = Object.keys(outputData);
          const key = keys[0];
          let source = outputData[key];
          if (!source) return;
          let node = document.createElement("div");
          source = typeof source === "string" ? source : source.join("\n");
          await this.#renderCommonCell({
            type: key,
            options: { host: node, source: source },
          });

          OutputAreaNode.appendChild(
            this.#createContainerNode(key, node, executionCount)
          );
          break;
        }
        case "error": // 错误信息输出
          sources = output.traceback;
          for (const source of sources) {
            let node = document.createElement("div");
            await this.#renderCommonCell({
              type: "application/vnd.jupyter.stderr",
              options: { host: node, source: source },
            });
            OutputAreaNode.appendChild(
              this.#createContainerNode(
                "application/vnd.jupyter.stderr",
                node,
                ""
              )
            );
          }
          break;
      }
    }
  }

  #createContainerNode(type, contentNode, executionCount) {
    let node = document.createElement("div");
    let areaNode = document.createElement("div");
    let promptNode = document.createElement("div");
    if (executionCount || executionCount === null) {
      promptNode.innerText = `[${executionCount === null ? " " : executionCount
        }]`;
    }
    // prompt class设置。prompt 样式分为input和output两种
    ["inputMarkdown", "inputCode"].includes(type)
      ? (promptNode.className =
        "lm-Widget p-Widget jp-InputPrompt jp-InputArea-prompt")
      : (promptNode.className =
        "lm-Widget p-Widget jp-OutputPrompt jp-OutputArea-prompt");
    switch (type) {
      case "inputMarkdown": {
        node.className =
          "lm-Widget p-Widget jp-Cell jp-MarkdownCell jp-mod-rendered jp-Notebook-cell";
        areaNode.className =
          "lm-Widget p-Widget jp-InputArea jp-Cell-inputArea";
        contentNode.className =
          "lm-Widget p-Widget jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput";
        contentNode.setAttribute("data-mime-type", "text/markdown");
        break;
      }
      case "inputCode": {
        node.className =
          "lm-Widget p-Widget jp-Cell jp-CodeCell jp-mod-noOutputs jp-Notebook-cell";
        areaNode.className =
          "lm-Widget p-Widget jp-InputArea jp-Cell-inputArea";
        contentNode.className =
          "lm-Widget p-Widget jp-CodeMirrorEditor jp-Editor jp-InputArea-editor";
        break;
      }
      case "application/vnd.jupyter.stdout": {
        node.className = "lm-Widget lm-Panel jp-OutputArea-child";
        areaNode.className =
          "lm-Widget p-Widget lm-Panel p-Panel jp-OutputArea-child";
        contentNode.className =
          "lm-Widget p-Widget jp-RenderedText jp-OutputArea-output";
        contentNode.setAttribute(
          "data-mime-type",
          "application/vnd.jupyter.stdout"
        );
        break;
      }
      case "application/vnd.jupyter.stderr": {
        node.className = "lm-Widget lm-Panel jp-OutputArea-child";
        areaNode.className =
          "lm-Widget p-Widget lm-Panel p-Panel jp-OutputArea-child";
        contentNode.className =
          "lm-Widget p-Widget jp-RenderedText jp-OutputArea-output";
        contentNode.setAttribute(
          "data-mime-type",
          "application/vnd.jupyter.stderr"
        );
        break;
      }
      default: {
        const typeClassMap = new Map([
          ["image/bmp", "jp-RenderedImage"],
          ["image/png", "jp-RenderedImage"],
          ["image/jpeg", "jp-RenderedImage"],
          ["image/gif", "jp-RenderedImage"],
          ["image/webp", "jp-RenderedImage"],
          ["text/latex", "jp-RenderedLatex"],
          ["image/svg+xml", "jp-RenderedSVG"],
          ["text/markdown", "jp-RenderedHTMLCommon jp-RenderedHTML"],
        ]);

        node.className =
          "lm-Widget p-Widget lm-Panel p-Panel jp-OutputArea-child jp-OutputArea-executeResult";
        areaNode.className =
          "lm-Widget p-Widget lm-Panel p-Panel jp-OutputArea-child";
        contentNode.className = `lm-Widget p-Widget ${typeClassMap.get(type) || "jp-RenderedHTMLCommon"
          } jp-OutputArea-output`;
        contentNode.setAttribute("data-mime-type", type);
        break;
      }
    }
    areaNode.appendChild(promptNode);
    areaNode.appendChild(contentNode);
    node.appendChild(areaNode);

    return node;
  }
}
