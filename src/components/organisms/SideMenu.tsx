import React, { useState, useEffect } from "react";
import { getTopNews } from "@/services/api";
import { TopNewsResponse } from "@/types/tNewsResponse";
// - Lista państw z flagą kraju przed nazwą
// - po kliknięciu w nazwę państwa przekierowanie na url /country/[kraj]

export const SideMenu = () => {
  // const [countries, setCountries] = useState<TopNewsResponse>();

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     const response = await getTopNews();
  //     const sources = response.sources;
  //     const uniqueCountries = Array.from(
  //       new Set(sources.map((source) => source.country))
  //     );
  //     setCountries(response);
  //   };
  //   fetchCountries();
  // }, []);

  return (
    <div>
      <aside className=" fixed bg-gray-100 p-4 h-screen inset-y-0 top-[120px] left-0 overflow-y-auto w-30v max-w-10r">
        <h2 className="text-lg font-bold mb-4">Select Country</h2>
      </aside>
    </div>
  );
};

//write code for side menu which is displayed all the time on the left side of the screen
