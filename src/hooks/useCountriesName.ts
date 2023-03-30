import { useState, useEffect } from "react";
import { getTopNews } from "@/services/api";
import { Source } from "@/types/tNewsResponse";

export const useCountriesName = () => {
  const [countriesData, setCountriesData] = useState<Source[] | undefined>([]);

  const fetchCountries = async () => {
    const response = await getTopNews();
    const sources = response?.sources;

    const updatedCountries =
      sources &&
      sources
        .concat({
          id: "plnd",
          name: "unknown",
          country: "pl",
        })
        .filter((item) => item.country !== "zh");

    const uniqueCountries = updatedCountries?.reduce(
      (acc: Source[], source: Source) => {
        const country = source.country;
        if (!acc.some((item) => item.country === country)) {
          acc.push(source);
        }
        return acc;
      },
      []
    );
    setCountriesData(uniqueCountries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return { countriesData };
};
