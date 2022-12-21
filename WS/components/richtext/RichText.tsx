import { Richtext } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer-ts";
import Heading from "./Heading";
import CodeBlock from "./CodeBlock";
import Link from "./Link";
import ZoomableImage from "../ZoomableImage";

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
          <code className="rounded-md border border-primary bg-tertiary p-1">
            {children}
          </code>
        ),
        link: (children, { href, target, linktype }) => (
          <Link href={href} target={target} linktype={linktype}>
            {children}
          </Link>
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
        image: (_children, { src, alt }) => (
          <ZoomableImage src={src} alt={alt} />
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
          <blockquote className="-mx-7 mb-6 border-l-2 border-l-primary bg-tertiary px-6 py-4 italic drop-shadow-standard">
            {children}
          </blockquote>
        ),
        ordered_list: (children) => (
          <ol className="mb-6 ml-8 list-decimal">{children}</ol>
        ),
        bullet_list: (children) => (
          <ul className="mb-6 ml-8 list-disc">{children}</ul>
        ),
        list_item: (children) => <li className="mb-2">{children}</li>,
        horizontal_rule: () => (
          <hr className="mx-auto mb-6 w-8 border-b-8 border-t-0 border-l-0 border-r-0 border-dotted border-primary" />
        ),
      },
    })}
  </>
);

export default RichText;
