import { Blok, SbArticle } from "../types/Types";
import Link from "next/link";
import { storyblokEditable, StoryData } from "@storyblok/react";
import RichText from "../components/richtext/RichText";
import Image from "next/image";

type ArticlePreviewProps = {
  article: StoryData<Blok<SbArticle>>;
};

const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  const { preview, title, image } = article.content;

  return (
    <div className="max-w-sm space-y-4" {...storyblokEditable(article.content)}>
      <Link href={article.full_slug} legacyBehavior>
        <a className="space-y-4">
          <div className="relative h-64 w-full">
            <Image
              className="rounded-md object-cover hover:rotate-1 hover:scale-105"
              fill
              src={image.filename}
              alt={image.alt}
              sizes="640w"
            />
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </a>
      </Link>
      <RichText document={preview} />
    </div>
  );
};

export default ArticlePreview;
