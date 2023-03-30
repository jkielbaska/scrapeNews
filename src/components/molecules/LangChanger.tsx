import { LOCALES } from "@/i18n/locales";
import { useAppDispatch } from "@/redux/store";
import { setLang } from "@/redux/langSlice";

export const LangChanger = () => {
  const dispatch = useAppDispatch();

  const handleLangChange = (newLang: string) => {
    dispatch(setLang(newLang));
  };

  return (
    <div className="flex justify-end gap-5 pr-5 pt-5">
      <button
        role="blockbutton"
        onClick={() => handleLangChange(LOCALES.ENGLISH)}
      >
        ENG
      </button>{" "}
      |
      <button
        role="listbutton"
        onClick={() => handleLangChange(LOCALES.POLISH)}
      >
        PL
      </button>
    </div>
  );
};
