import { Blok, SbRichText } from "../types/Types";
import { default as RenderRichText } from "../components/richtext/RichText";

type RichTextProps = {
  blok: Blok<SbRichText>;
};

const RichText = ({ blok: { content } }: RichTextProps) => (
  <RenderRichText document={content} />
);

export default RichText;
