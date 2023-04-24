/**
 * 调用 codemirror 插件渲染code，并调用 jupyterlab 的 codemirror 主题样式做渲染
 * codemirror 插件： https://codemirror.net/
 */

import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { python } from "@codemirror/lang-python";
import { sql } from "@codemirror/lang-sql";
import { Theme } from "./codemirror.theme";

// Codemirror 扩展配置
const extensionsConfig = [
  EditorState.readOnly.of(true),
  EditorView.editable.of(false),
  Theme.getTheme("jupyter"), // 主题引入

  /* 引入所需的编程语言 START */
  python(),
  sql(),
  /* 引入所需的编程语言 END */
];

/**
 * 调用codemirror插件渲染code
 *
 * @param {string} codeString 需要渲染的code字符串
 * @param {Element} parent 父元素，渲染成功后得元素将作为其的子元素
 * @returns {Element} 渲染完成后的父元素
 */
export function createCodemirror(codeString, parent) {
  if (codeString instanceof Array) codeString = codeString.join("");
  if (typeof codeString !== "string")
    throw "Function createCodemirror: 参数 codeString 必须是字符串！";
  if (!parent) console.warn("Function createCodemirror: 参数 parent 不能为空");
  if (!("appendChild" in document.body)) {
    console.warn(
      "Function createCodemirror: 参数 parent 类型错误，需为HTML元素"
    );
    codeString = document.body;
  }

  return new EditorView({
    state: EditorState.create({
      doc: codeString || "",
      extensions: extensionsConfig,
    }),
    parent: parent || document.body,
  });
}
