import { Blok, SbRichText } from "../types/Types";
import { default as RenderRichText } from "../components/richtext/RichText";
import { storyblokEditable } from "@storyblok/react";

type RichTextProps = {
  blok: Blok<SbRichText>;
};

const RichText = ({ blok }: RichTextProps) => (
  <div className="p-8 sm:p-8" {...storyblokEditable(blok)}>
    <RenderRichText document={blok.content} />
  </div>
);

export default RichText;
