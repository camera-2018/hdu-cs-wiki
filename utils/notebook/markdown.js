import markdown from "markdown-it";

const MD = markdown({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true,
});

export default MD;
