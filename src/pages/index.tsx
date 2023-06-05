import { useCountriesName } from "@/hooks/useCountriesName";
import { LinkFlagImage } from "@/components/atoms/LinkFlagImage";
import { useSelector } from "react-redux";
import { Footer } from "@/components/organisms/Footer";
import { FormattedMessage } from "react-intl";
import { selectorLayout } from "@/redux/layoutSlice";

export default function Home() {
  const { countriesData } = useCountriesName();
  const layout = useSelector(selectorLayout);

  return (
    <>
      <h3 className="flex justify-center text-gray-400 text-3xl font-gruppo">
        <FormattedMessage id="startPageTitle" />
      </h3>
      <div className="flex flex-wrap justify-center mb-20">
        {countriesData?.map((country) => {
          return (
            <div
              key={country.id}
              className={
                layout === "block"
                  ? "w-[200px] h-[200px] div-block  hover:w-[210px] hover:h-[205px]"
                  : layout === "list"
                  ? "m-2 div-list items-center"
                  : "w-[200px] h-[200px] text-xl m-3 flex items-center justify-center bg-gray-400 border-red-700 border-2 rounded-md"
              }
            >
              <LinkFlagImage country={country.country} />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
