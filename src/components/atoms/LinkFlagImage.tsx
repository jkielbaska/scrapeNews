import Image from "next/image";
import Link from "next/link";
import countryList from "country-list";
import { Typography } from "@mui/material";

export const LinkFlagImage = ({ country }: { country: string }) => {
  const countryName = countryList.getName(country);
  const flagUrl = `https://flagcdn.com/32x24/${country}.png`;

  return (
    <Link href={`/country/${country}`}>
      <div className="w-full h-full flex justify-center flex-col items-center">
        <Image
          alt={`flag of ${country}`}
          src={flagUrl}
          width={32}
          height={24}
        />
        <Typography>{countryName}</Typography>
      </div>
    </Link>
  );
};
