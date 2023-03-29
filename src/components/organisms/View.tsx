import { CountryNewsResponse } from "@/types/tNewsResponse";
import { ArticleImage } from "../atoms/ArticleImage";
import { MainPopup } from "../molecules/MainPopup";

export const View = ({
  countryNews,
  type,
}: {
  countryNews: CountryNewsResponse;
  type: "list" | "block";
}) => {
  return (
    <div className="max-w-2xl">
      {countryNews.articles.map((article) => {
        return (
          <div
            id="Click to article popup"
            key={`${article.publishedAt} ${Math.random()}`}
            className={
              type === "list"
                ? "m-4 flex flex-col justify-center items-center font-serif bg-gray-300 border-sky-700 border-2 rounded-md first:mt-10 last:mb-20"
                : "m-3 w-60v max-w-md flex flex-col justify-center items-center font-serif bg-gray-300 border-sky-700 border-2 rounded-md first:mt-10 last:mb-20"
            }
          >
            {type === "block" && (
              <ArticleImage urlToImage={article.urlToImage} />
            )}
            <h2 className="text-xl font-bold">
              {article.title && article.title}
            </h2>
            <h4>
              {article.source.name !== null
                ? `Source: ${article.source.name}`
                : ""}
            </h4>
            <h3>{article.publishedAt && article.publishedAt}</h3>
            {type === "block" && (
              <p className="text-xl p-2">
                {article.description !== null
                  ? article.description
                  : "no description provided. Click to see whole article"}
              </p>
            )}

            <MainPopup article={article} countryNewsUrl={article.url} />
          </div>
        );
      })}
    </div>
  );
};
