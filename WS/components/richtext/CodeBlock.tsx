import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import { parseLanguageString } from "../../utils/parseLanguageString";

type CodeBlockProps = {
  code: string;
  language: string;
};

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={parseLanguageString(language)}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} rounded-md text-sm p-8 -mx-8 mb-6 overflow-scroll drop-shadow-standard`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
