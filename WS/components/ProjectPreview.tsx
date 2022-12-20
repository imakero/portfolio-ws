import { Blok, SbProject } from "../types/Types";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import { imageDimensions } from "../utils/imageDimensions";
import Link from "next/link";
import TagList from "./TagList";

type ProjectPreviewProps = {
  blok: Blok<SbProject>;
  tags: string[];
  slug: string;
};

const ProjectPreview = ({ tags, blok, slug }: ProjectPreviewProps) => {
  const { image, title } = blok;
  const { width, height } = imageDimensions(image);

  return (
    <article
      className="relative mb-8 fill-tertiary"
      {...storyblokEditable(blok)}
    >
      <div className="relative">
        <div
          className={`relative w-full`}
          style={{ aspectRatio: `${width} / ${height}` }}
        >
          <Image
            className="rounded-md object-cover drop-shadow-standard"
            fill
            src={image.filename}
            alt={image.alt}
          />
        </div>
        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center space-y-2 overflow-hidden rounded-md bg-primary text-white opacity-0 transition-opacity duration-300 hover:opacity-95">
          <h2 className="text-4xl font-bold">{title}</h2>
          <TagList tags={tags} />
          <Link href={`/projects/${slug}`} legacyBehavior>
            <a className="text-white hover:text-secondary">
              Learn more &gt;&gt;
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectPreview;
