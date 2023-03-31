import { LOCALES } from "@/i18n/locales";
import { messages } from "@/i18n/messages";
import { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { selectorLang } from "@/redux/langSlice";
import { Header } from "../organisms/Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  const locale = LOCALES.ENGLISH;
  const lang = useSelector(selectorLang);

  return (
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
  );
};
