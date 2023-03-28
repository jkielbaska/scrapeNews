import Head from "next/head";
import { ListView } from "@/components/molecules/ListView";
import { BlockView } from "@/components/molecules/BlockView";
import { Params, CountryNewsResponse } from "@/types/tNewsResponse";
import { getCountryNews } from "@/services/api";
import { useSelector } from "react-redux";

export async function getServerSideProps({ params }: { params: Params }) {
  const countryNews = await getCountryNews(params.kraj);
  return {
    props: {
      countryNews,
      country: params.kraj,
    },
  };
}

const CountryById = ({
  countryNews,
  country,
}: {
  countryNews: CountryNewsResponse;
  country: Params;
}) => {
  console.log(countryNews, country);
  const layout = useSelector((state: any) => state.layout.layout);

  return (
    <>
      <div className="flex flex-wrap justify-center pt-5 text-center">
        <Head>
          <title>News - NewsAPI</title>
        </Head>

        <div>
          {layout === "block" ? (
            <BlockView countryNews={countryNews} />
          ) : layout === "list" ? (
            <ListView countryNews={countryNews} />
          ) : (
            <ListView countryNews={countryNews} />
          )}
        </div>
        {/* <Footer totalResults={countryNews.totalResults} /> */}
      </div>
    </>
  );
};

export default CountryById;
{
  /* <div className="flex flex-col items-center  pt-5 text-center"> */
}
{
  /* <div className="flex flex-wrap justify-center"></div> */
}
