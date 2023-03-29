import Head from "next/head";
import { View } from "@/components/molecules/View";
import { Params, CountryNewsResponse } from "@/types/tNewsResponse";
import { getCountryNews } from "@/services/api";
import { useSelector } from "react-redux";
import { Footer } from "@/components/organisms/Footer";

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
            <View countryNews={countryNews} type="block" />
          ) : layout === "list" ? (
            <View countryNews={countryNews} type="list" />
          ) : (
            <View countryNews={countryNews} type="block" />
          )}
        </div>
        <Footer totalResults={countryNews.totalResults} />
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
