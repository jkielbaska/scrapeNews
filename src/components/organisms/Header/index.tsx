import Link from "next/link";
import { HeaderPopup } from "../../atoms/HeadPopup";
import { ViewChanger } from "../../molecules/ViewChanger";
import { SideMenu } from "../../molecules/SideMenu";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 w-100v fixed top-0">
      <div className="flex flex-row justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold pb-3">GnNews</h1>
        </Link>
        <ViewChanger />
      </div>
      <SideMenu />
      <HeaderPopup />
    </header>
  );
};

// - przycisk do zmiany języka strony (nie wymagane, ale wypadałoby. react-translator-component, albo i18n?)
