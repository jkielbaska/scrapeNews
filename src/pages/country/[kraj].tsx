import { View } from "@/components/organisms/View";
import { Params, CountryNewsResponse } from "@/types/tNewsResponse";
import { getCountryNews } from "@/services/api";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
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

const CountryById = ({ countryNews }: { countryNews: CountryNewsResponse }) => {
  const layout = useSelector((state: RootState) => state.layout.layout);

  return (
    <>
      <div className="flex flex-wrap justify-center pt-5 text-center h-20v">
        {layout === "block" ? (
          <View countryNews={countryNews} type="block" />
        ) : layout === "list" ? (
          <View countryNews={countryNews} type="list" />
        ) : (
          <View countryNews={countryNews} type="block" />
        )}
        <Footer totalResults={countryNews.totalResults} />
      </div>
    </>
  );
};

export default CountryById;
