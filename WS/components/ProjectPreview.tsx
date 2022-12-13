import { Blok, SbProject } from "../types/Types";
import { render } from "storyblok-rich-text-react-renderer-ts";
import TagList from "./TagList";
import RichText from "./richtext/RichText";

type ProjectPreviewProps = {
  blok: Blok<SbProject>;
  tags: string[];
};

const ProjectPreview = ({ tags, blok }: ProjectPreviewProps) => {
  const { image, title, description } = blok;

  return (
    <article className="flex-col max-w-md p-4 m-16 relative fill-tertiary">
      <svg
        className="absolute top-1/4 -left-1/4 w-full h-full scale-x-150 scale-y-125 -z-10 overflow-visible"
        width="831"
        height="811"
        viewBox="0 0 831 811"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M65.0417 666.909C145.872 826.161 282.597 735.283 423.078 771.999C483.824 787.875 517.117 814.692 578.918 810.576C694.581 802.872 777.949 753.3 840.294 621.68C945.399 399.788 858.986 5.29715 645.988 0.453013C432.99 -4.39112 320.894 28.261 137.044 164.074C-46.8068 299.887 -18.7233 501.875 65.0417 666.909Z" />
      </svg>

      <img src={image.filename} alt={image.alt} />
      <TagList tags={tags} />
      <h2 className="text-4xl font-bold">{title}</h2>
      <RichText document={description} />
    </article>
  );
};

export default ProjectPreview;
