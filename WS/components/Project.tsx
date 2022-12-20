import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { Blok, SbProject } from "../types/Types";
import { imageDimensions } from "../utils/imageDimensions";
import Blob from "./Blob";
import RichText from "./richtext/RichText";

type ProjectProps = {
  blok: Blok<SbProject>;
  tags: string[];
};

const Project = ({ blok }: ProjectProps) => {
  const { description, gallery } = blok;
  const { width, height } = imageDimensions(gallery[0]);

  return (
    <article
      className="container mx-auto mt-32 flex justify-center"
      {...storyblokEditable(blok)}
    >
      <Blob id={2}>
        <div className="p-4">
          <div
            className={`relative mb-8 w-full`}
            style={{ aspectRatio: `${width} / ${height}` }}
          >
            <Image
              className="rounded-md object-contain drop-shadow-standard"
              fill
              src={gallery[0].filename}
              alt={gallery[0].alt}
            />
          </div>

          <RichText document={description} />
        </div>
      </Blob>
    </article>
  );
};

export default Project;
