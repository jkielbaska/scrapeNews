import { useState, useEffect } from "react";
import { getTopNews } from "@/services/api";
import { Source } from "@/types/tNewsResponse";

export const useCountriesName = () => {
  const [countriesData, setCountriesData] = useState<Source[]>([]);

  const fetchCountries = async () => {
    const response = await getTopNews();
    const sources = response.sources;

    const updatedCountries = sources.concat({
      id: "plnd",
      name: "unknown",
      country: "pl",
    });

    const uniqueCountries = updatedCountries.reduce(
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
  //do alphabet sort

  useEffect(() => {
    fetchCountries();
    console.log(countriesData);
  }, []);

  return { countriesData };
};
