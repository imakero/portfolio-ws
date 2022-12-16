import { Richtext } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer-ts";
import Heading from "./Heading";
import CodeBlock from "./CodeBlock";
import Image from "next/image";

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
        image: (_children, props) => (
          <div className="relative block w-full h-96 mb-6">
            <Image
              className="object-cover rounded-md drop-shadow-standard"
              fill
              src={props.src}
              alt={props.alt}
            />
          </div>
        ),
        paragraph: (children) => {
          // We must check if the paragraph contains for example images
          // since these are rendered in div wrappers, and paragraphs can't
          // have div children.
          if (Array.isArray(children) && typeof children[0] === "object") {
            return <>{children}</>;
          }
          return <p className="mb-6 last:mb-0">{children}</p>;
        },
        blockquote: (children) => (
          <blockquote className="border-l-2 bg-tertiary px-6 -mx-7 italic py-4 border-l-primary mb-6 drop-shadow-standard">
            {children}
          </blockquote>
        ),
        ordered_list: (children) => (
          <ol className="list-decimal mb-6">{children}</ol>
        ),
        bullet_list: (children) => (
          <ul className="list-disc mb-6">{children}</ul>
        ),
        list_item: (children) => <li className="mb-2">{children}</li>,
        horizontal_rule: () => (
          <hr className="mx-auto w-8 border-primary border-b-8 border-t-0 border-l-0 border-r-0 border-dotted mb-6" />
        ),
      },
    })}
  </>
);

export default RichText;
