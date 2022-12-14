import { Language } from "prism-react-renderer";

const prismReactRendererLanguages = [
  "markup",
  "bash",
  "clike",
  "c",
  "cpp",
  "css",
  "javascript",
  "jsx",
  "coffeescript",
  "actionscript",
  "css-extr",
  "diff",
  "git",
  "go",
  "graphql",
  "handlebars",
  "json",
  "less",
  "makefile",
  "markdown",
  "objectivec",
  "ocaml",
  "python",
  "reason",
  "sass",
  "scss",
  "sql",
  "stylus",
  "tsx",
  "typescript",
  "wasm",
  "yaml",
];

export const parseLanguageString = (sbLanguageString: string): Language => {
  const parsedLanguage = sbLanguageString.split("language-")[1];
  if (parsedLanguage === "typescript") {
    return "tsx";
  } else if (parsedLanguage === "javascript") {
    return "jsx";
  } else if (prismReactRendererLanguages.includes(parsedLanguage)) {
    return parsedLanguage as Language;
  } else {
    return "tsx";
  }
};
