import { LOCALES } from "@/i18n/locales";
import { useAppDispatch } from "@/redux/store";
import { setLang } from "@/redux/langSlice";

export const LangChanger = () => {
  const dispatch = useAppDispatch();

  const handleLangChange = (newLang: string) => {
    dispatch(setLang(newLang));
  };

  return (
    <div className="flex justify-end gap-5 pr-5 font-bebas">
      <button
        role="engbutton"
        onClick={() => handleLangChange(LOCALES.ENGLISH)}
      >
        ENG
      </button>{" "}
      |
      <button role="plbutton" onClick={() => handleLangChange(LOCALES.POLISH)}>
        PL
      </button>
    </div>
  );
};
