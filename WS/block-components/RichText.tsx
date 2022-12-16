import { Blok, SbRichText } from "../types/Types";
import { default as RenderRichText } from "../components/richtext/RichText";

type RichTextProps = {
  blok: Blok<SbRichText>;
};

const RichText = ({ blok: { content } }: RichTextProps) => (
  <div className="p-4 sm:p-8">
    <RenderRichText document={content} />
  </div>
);

export default RichText;
