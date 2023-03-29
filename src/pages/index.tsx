import { useCountriesName } from "@/hooks/useCountriesName";
import { LinkFlagImage } from "@/components/atoms/LinkFlagImage";
import { useSelector } from "react-redux";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  const { countriesData } = useCountriesName();
  const layout = useSelector((state: any) => state.layout.layout);
  return (
    <>
      <h3 className="pt-[70px] flex justify-center text-gray-400 text-2xl">
        See news from choosen country
      </h3>
      <div className="flex flex-wrap justify-center">
        {countriesData.map((country) => {
          return (
            <div
              key={country.id}
              className={
                layout === "block"
                  ? "w-[200px] h-[200px] text-xl m-3 flex items-center justify-center  font-serif bg-gray-400 border-sky-700 border-2 rounded-md"
                  : layout === "list"
                  ? "m-2 w-full font-serif bg-gray-400 border-sky-700 border-2 rounded-md"
                  : ""
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
