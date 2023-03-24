import Head from "next/head";
import Image from "next/image";
import { Params, CountryNewsResponse } from "@/types/tNewsResponse";

export const ListView = ({
  countryNews,
}: {
  countryNews: CountryNewsResponse;
}) => {
  return (
    <div className="max-w-2xl">
      {countryNews.articles.map((article) => {
        return (
          <div
            key={`${article.publishedAt} ${Math.random()}`}
            className="div-list"
          >
            <h2>{article.title !== null ? article.title : ""}</h2>
            <h4>
              {article.source.name !== null
                ? `Source: ${article.source.name}`
                : ""}
            </h4>
            <h3>{article.publishedAt !== null ? article.publishedAt : ""}</h3>
          </div>
        );
      })}
    </div>
  );
};
// - każdy news w przypadku listy to: tytuł, nazwa źródła, data publikacji

{
  /* <p>
{article.description !== null
  ? article.description
  : "no description provided. Click to see whole article"}
</p> */
}
