import { ArticleImage } from "@/components/molecules/ArticleImage";
import { CountryNewsResponse } from "@/types/tNewsResponse";
import { MainPopup } from "./MainPopup";

export const BlockView = ({
  countryNews,
}: {
  countryNews: CountryNewsResponse;
}) => {
  // const [isPopupOpen, setIsPopupOpen] = useState(false); // Define state variable

  // const handlePopupOpen = () => {
  //   setIsPopupOpen(true); // Update state variable when div element is clicked
  // };

  return (
    <div className="flex flex-wrap justify-center">
      {countryNews.articles.map((article) => {
        return (
          <>
            <div
              id="Click to article popup"
              key={`${article.publishedAt} ${Math.random()}`}
              className="m-3 w-60v max-w-md flex flex-col justify-center items-center font-serif bg-gray-300 border-sky-700 border-2 rounded-md"
              // onClick={handlePopupOpen}
            >
              <ArticleImage urlToImage={article.urlToImage} />
              <h2 className="text-xl font-bold">
                {article.title && article.title}
              </h2>
              <h4 className="">
                {article.source.name !== null
                  ? `Source: ${article.source.name}`
                  : ""}
              </h4>
              <h3 className="">{article.publishedAt && article.publishedAt}</h3>
              <p className="text-xl p-2">
                {article.description !== null
                  ? article.description
                  : "no description provided. Click to see whole article"}
              </p>
              <MainPopup
                article={article}
                countryNewsUrl={article.url}
              ></MainPopup>
            </div>
          </>
        );
      })}
    </div>
  );
};
// - każdy news w postaci kafelka: miniaturka (jeśli jest), tytuł, nazwa źródła, data publikacji i description.
// - kliknięcie na newsa powinno otworzyć popupa z jego treścią, autorem treści i urlem do strony skąd dany news był pobrany
// https://newsapi.org/docs/guides/how-to-get-the-full-content-for-a-news-article

// const handleClick = async (url: string | null) => {
//     try {
//       const res = await axios.get(
//         `/api/scrapeWeb?url=${encodeURIComponent(url!)}`
//       );
//       const data = res.data;
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
