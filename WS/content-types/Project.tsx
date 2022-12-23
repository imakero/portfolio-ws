import { storyblokEditable } from "@storyblok/react";
import { Blok, SbProject } from "../types/Types";
import Blob from "../components/Blob";
import RichText from "../components/richtext/RichText";
import ImageGallery from "../components/ImageGallery";

type ProjectProps = {
  blok: Blok<SbProject>;
  tags: string[];
};

const Project = ({ blok }: ProjectProps) => {
  const { description, gallery } = blok;

  return (
    <article
      className="container mx-auto mt-32 flex justify-center"
      {...storyblokEditable(blok)}
    >
      <Blob id={2} className="max-w-lg">
        <div className="p-4">
          <ImageGallery images={gallery} />
          <RichText document={description} />
        </div>
      </Blob>
    </article>
  );
};

export default Project;
