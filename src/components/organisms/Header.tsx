import Link from "next/link";
import { useRouter } from "next/router";
import { GoBack } from "../atoms/GoBack";
import { HeaderPopup } from "../atoms/HeadPopup";
import { ViewChanger } from "../molecules/ViewChanger";

// - nazwa
// - przycisk odpowiadający za zmianę widoku newsów: lista lub kafelki. Do przechowania stanu wykorzystać reduxa
// - przycisk do popupu z opisem tego co sprawiło mi największą trudność w zadniu i co największą frajdę. Może react-tostify?
// - przycisk do zmiany języka strony (nie wymagane, ale wypadałoby. react-translator-component, albo i18n?)

export const Header = () => {
  const router = useRouter();

  return (
    <div>
      <header className="bg-gray-900 text-white p-4 w-100v fixed top-0">
        <div className="flex flex-row justify-between">
          <Link href="/">
            <h1 className="text-xl font-bold">GnNews</h1>
          </Link>
          <ViewChanger />
        </div>
        <HeaderPopup />
        <div className="flex">{router.pathname !== "/" && <GoBack />}</div>
      </header>
      {/* </header> */}
    </div>
  );
};
