import { Blok, SbArticle } from "../types/Types";
import { storyblokEditable } from "@storyblok/react";
import RichText from "./richtext/RichText";
import Image from "next/image";

type ArticleProps = {
  blok: Blok<SbArticle>;
};

const Article = ({ blok }: ArticleProps) => {
  const { image, title, content, subtitle } = blok;

  return (
    <article
      className="flex flex-col justify-center align-middle w-full items-center pt-14"
      {...storyblokEditable(blok)}
    >
      <div className="flex flex-col w-full justify-center items-center">
        <div className="relative w-full h-[75vh] mb-6">
          <Image
            className="object-cover object-center"
            fill
            src={image.filename}
            alt={image.alt}
          />
        </div>
        <h1 className="text-5xl font-bold text-center my-4 px-6">{title}</h1>
        <h2 className="text-2xl font-regular text-center mb-8 px-6">
          {subtitle}
        </h2>
      </div>
      <div className="flex flex-col w-full max-w-xl px-6">
        <RichText document={content} />
      </div>
    </article>
  );
};

export default Article;
