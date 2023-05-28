import { LOCALES } from "@/i18n/locales";
import { messages } from "@/i18n/messages";
import { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { selectorLang } from "@/redux/langSlice";
import { Header } from "../organisms/Header";
import { Gruppo, Bebas_Neue } from "next/font/google";

const gruppo = Gruppo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gruppo",
});

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
});

export const Layout = ({ children }: { children: ReactNode }) => {
  const locale = LOCALES.ENGLISH;
  const lang = useSelector(selectorLang);

  return (
    <html className={`${gruppo.variable} ${bebas_neue.variable}`}>
      <IntlProvider
        messages={messages[lang]}
        locale={locale}
        defaultLocale={LOCALES.ENGLISH}
      >
        <div className="flex flex-col">
          <Header />
          <div>
            <main className="pt-[120px] flex flex-col">{children}</main>
          </div>
        </div>
      </IntlProvider>
    </html>
  );
};
