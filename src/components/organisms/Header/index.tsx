import Link from "next/link";
import { ViewChanger } from "../../molecules/ViewChanger";
import { SideMenu } from "../../molecules/SideMenu";
import { LangChanger } from "@/components/molecules/LangChanger";

export const Header = () => {
  return (
    <header className=" bg-gray-800 text-white p-4 w-100v fixed top-0">
      <div className="flex flex-row justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold pb-3">scrapeNews.</h1>
        </Link>
        <ViewChanger />
        <LangChanger />
      </div>
      <SideMenu />
    </header>
  );
};
