import Image from "next/image";
import Link from "next/link";
import countryList from "country-list";

export const LinkFlagImage = ({ country }: { country: string }) => {
  const countryName = countryList.getName(country);
  const flagUrl = `https://flagcdn.com/32x24/${country}.png`;

  return (
    <Link href={`/country/${country}`}>
      <div className="w-full h-full flex">
        {/* <Image
          alt={`flag of ${country}`}
          src={flagUrl}
          width={32}
          height={24}
        /> */}
        <p className="font-bebas text-3xl text-center">{countryName}</p>
      </div>
    </Link>
  );
};
