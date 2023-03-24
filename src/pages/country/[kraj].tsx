import Head from "next/head";
import Image from "next/image";
import { ListView } from "@/components/molecules/ListView";
import { Params, CountryNewsResponse } from "@/types/tNewsResponse";
import { getCountryNews, getTopNews } from "@/services/api";

export async function getServerSideProps({ params }: { params: Params }) {
  const countryNews = await getCountryNews(params.kraj);
  return {
    props: {
      countryNews,
      params: params.kraj,
    },
  };
}

const CountryById = ({
  countryNews,
  params,
}: {
  countryNews: CountryNewsResponse;
  params: Params;
}) => {
  console.log(countryNews, params);
  return (
    <div className="flex flex-col items-center pt-5 ">
      <Head>
        <title>News - NewsAPI</title>
      </Head>

      <div>
        <ListView countryNews={countryNews}></ListView>
      </div>
    </div>
  );
};

export default CountryById;
