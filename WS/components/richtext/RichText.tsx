import { Richtext } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer-ts";
import Heading from "./Heading";
import CodeBlock from "./CodeBlock";

type RichTextProps = {
  document: Richtext;
};

const RichText = ({ document }: RichTextProps) => (
  <>
    {render(document, {
      markResolvers: {
        bold: (children) => <strong className="font-bold">{children}</strong>,
        italic: (children) => <em className="italic">{children}</em>,
        strike: (children) => <span className="line-through">{children}</span>,
        underline: (children) => <span className="underline">{children}</span>,
        code: (children) => (
          <code className="border border-primary bg-tertiary rounded-md p-1">
            {children}
          </code>
        ),
      },
      nodeResolvers: {
        heading: (children, props) => <Heading {...props}>{children}</Heading>,
        code_block: (children, { class: language }) => (
          <CodeBlock
            code={children ? children.toString() : ""}
            language={language}
          />
        ),
        paragraph: (children) => <p className="mb-6">{children}</p>,
      },
    })}
  </>
);

export default RichText;
