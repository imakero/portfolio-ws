import { Blok, SbArticle } from "../types/Types";
import { storyblokEditable } from "@storyblok/react";
import RichText from "../components/richtext/RichText";
import Image from "next/image";

type ArticleProps = {
  blok: Blok<SbArticle>;
};

const Article = ({ blok }: ArticleProps) => {
  const { image, title, content, subtitle } = blok;

  return (
    <article
      className="flex w-full flex-col items-center justify-center pt-14 align-middle"
      {...storyblokEditable(blok)}
    >
      <div className="flex w-full flex-col items-center justify-center">
        {image && (
          <div className="relative mb-6 h-[75vh] w-full">
            <Image
              className="object-cover object-center"
              fill
              src={image.filename}
              alt={image.alt}
              sizes="100vw"
            />
          </div>
        )}
        <h1 className="my-4 px-6 text-center text-5xl font-bold">{title}</h1>
        <h2 className="font-regular mb-8 px-6 text-center text-2xl">
          {subtitle}
        </h2>
      </div>
      <div className="flex w-full max-w-xl flex-col px-6">
        <RichText document={content} />
      </div>
    </article>
  );
};

export default Article;
