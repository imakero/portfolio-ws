import { Blok, SbProject } from "../types/Types";
import TagList from "./TagList";
import RichText from "./richtext/RichText";
import Image from "next/image";

type ProjectPreviewProps = {
  blok: Blok<SbProject>;
  tags: string[];
};

const ProjectPreview = ({ tags, blok }: ProjectPreviewProps) => {
  const { image, title, description } = blok;

  return (
    <article className="flex-col max-w-md p-4 m-16 fill-tertiary">
      <div className="relative">
        <div className="absolute top-32 left-0 scale-x-150 w-full h-full -z-10 overflow-visible">
          <svg
            viewBox="0 0 857 898"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <path d="M541.5 60.3998C317.167 -5.23731 152.196 -62.9164 60.5323 146.266C7.42864 396.408 -70.529 644.739 129.032 815.766C317.475 977.264 671.392 858.207 764.532 815.766C925.371 742.477 834.073 363.121 803 193.4C770.62 16.5391 718.786 112.272 541.5 60.3998Z" />
          </svg>
        </div>
        <div className="relative w-full h-64 hover:-rotate-1 hover:scale-105 mb-4 ">
          <Image
            className="object-cover drop-shadow-standard rounded-md border-primary border"
            fill
            src={image.filename}
            alt={image.alt}
          />
        </div>
        <TagList tags={tags} />
        <h2 className="text-4xl font-bold">{title}</h2>
        <RichText document={description} />
      </div>
    </article>
  );
};

export default ProjectPreview;
