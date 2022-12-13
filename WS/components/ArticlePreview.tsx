import { Blok, SbArticle } from "../types/Types";
import { render } from "storyblok-rich-text-react-renderer-ts";
import Link from "next/link";
import { storyblokEditable, StoryData } from "@storyblok/react";

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
        <div>{render(preview)}</div>
      </Link>
    </div>
  );
};

export default ArticlePreview;
