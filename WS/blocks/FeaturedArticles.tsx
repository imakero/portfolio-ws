import { storyblokEditable } from "@storyblok/react";
import ArticlePreview from "../components/ArticlePreview";
import { Blok, SbFeaturedArticles } from "../types/Types";

type FeaturedArticlesProps = {
  blok: Blok<SbFeaturedArticles>;
};

const FeaturedArticles = ({ blok }: FeaturedArticlesProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center pt-20 space-x-4 mx-4">
        {blok.articles.map((article) => (
          <ArticlePreview article={article} key={article.uuid} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
