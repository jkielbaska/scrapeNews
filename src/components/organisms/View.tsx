import { CountryNewsResponse } from "@/types/tNewsResponse";
import { FormattedMessage } from "react-intl";
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
    <div className=" flex flex-wrap justify-center mt-10 pb-20 ">
      {countryNews?.articles.map((article) => {
        return (
          <div
            id="Click to article popup"
            key={`${article.publishedAt} ${Math.random()}`}
            className={
              type === "list"
                ? "m-4 w-full flex flex-col justify-center items-center  bg-gray-300 border-sky-700 border-2 rounded-md"
                : "m-3 w-60v max-w-md flex flex-col justify-center items-center  bg-gray-300 border-sky-700 border-2 rounded-md "
            }
          >
            {type === "block" && (
              <ArticleImage urlToImage={article.urlToImage} />
            )}
            <h2 className="text-xl font-bold">
              {article.title && article.title}
            </h2>
            <h4>
              {article.source.name !== null ? (
                <p>
                  <FormattedMessage id="viewComponentSource" />:{" "}
                  {article.source.name}
                </p>
              ) : (
                ""
              )}
            </h4>
            <h3>{article.publishedAt && article.publishedAt}</h3>
            {type === "block" && (
              <p className="text-xl p-2">
                {article.description !== null ? (
                  article.description
                ) : (
                  <FormattedMessage id="viewComponentDescription" />
                )}
              </p>
            )}

            <MainPopup article={article} countryNewsUrl={article.url} />
          </div>
        );
      })}
    </div>
  );
};
