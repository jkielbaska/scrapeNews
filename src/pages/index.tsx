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
      <h3 className="pt-[70px] flex justify-center text-gray-400 text-2xl">
        <FormattedMessage id="startPageTitle" />
      </h3>
      <div className="flex flex-wrap justify-center mb-20">
        {countriesData?.map((country) => {
          return (
            <div
              key={country.id}
              className={
                layout === "block"
                  ? "w-[200px] h-[200px] text-xl m-3 flex items-center justify-center  font-serif bg-gray-400 border-sky-700 border-2 rounded-md"
                  : layout === "list"
                  ? "m-2 w-full font-serif bg-gray-400 border-sky-700 border-2 rounded-md"
                  : "w-[200px] h-[200px] text-xl m-3 flex items-center justify-center  font-serif bg-gray-400 border-sky-700 border-2 rounded-md"
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
