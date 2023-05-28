import Link from "next/link";
import { ViewChanger } from "../../molecules/ViewChanger";
import { SideMenu } from "../../molecules/SideMenu";

export const Header = () => {
  return (
    <header className="border-b border-logo bg-transparent text-logo backdrop-blur-md p-4 w-100v fixed top-0 flex  justify-between ">
      <Link href="/">
        <h1 className="font-bebas text-4xl ">scrapeNews.</h1>
      </Link>
      <SideMenu />
      <ViewChanger />
    </header>
  );
};
