import { storyblokEditable } from "@storyblok/react";
import ArticlePreview from "../block-components/ArticlePreview";
import { Blok, SbFeaturedArticles } from "../types/Types";

type FeaturedArticlesProps = {
  blok: Blok<SbFeaturedArticles>;
};

const FeaturedArticles = ({ blok }: FeaturedArticlesProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="mx-4 grid grid-cols-1 justify-items-center space-x-4 pt-20 lg:grid-cols-2 xl:grid-cols-3">
        {blok.articles.map((article) => (
          <ArticlePreview article={article} key={article.uuid} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
