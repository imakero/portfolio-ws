import ArticlePreview from "../components/ArticlePreview";
import { Blok, SbFeaturedArticles } from "../types/Types";

type FeaturedArticlesProps = {
  blok: Blok<SbFeaturedArticles>;
};

const FeaturedArticles = ({ blok }: FeaturedArticlesProps) => {
  return (
    <div className="grid grid-cols-3 pt-20 space-x-4 mx-4">
      {blok.articles.map((article) => (
        <ArticlePreview article={article} key={article.uuid} />
      ))}
    </div>
  );
};

export default FeaturedArticles;
