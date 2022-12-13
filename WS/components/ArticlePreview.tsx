import { Blok, SbArticle } from "../types/Types";
import Link from "next/link";
import { storyblokEditable, StoryData } from "@storyblok/react";
import RichText from "./richtext/RichText";

type ArticlePreviewProps = {
  article: StoryData<Blok<SbArticle>>;
};

const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  const { preview, title, image } = article.content;

  return (
    <div className="max-w-sm" {...storyblokEditable(article.content)}>
      <Link href={article.full_slug}>
        <img src={image.filename} alt={image.alt} />
        <h2 className="font-bold text-2xl">{title}</h2>
        <div>
          <RichText document={preview} />
        </div>
      </Link>
    </div>
  );
};

export default ArticlePreview;
