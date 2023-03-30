import { useEffect, useState } from "react";

export const useTime = () => {
  const [hydrated, setHydrated] = useState<boolean>(false); //to prevent hydration error
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    {
      setHydrated(true);
    }
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [currentDate]);

  const currentHour = currentDate.toLocaleTimeString();

  return { currentHour, currentDate, hydrated };
};
