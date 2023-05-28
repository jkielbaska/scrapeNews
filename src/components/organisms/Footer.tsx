import { useTime } from "@/hooks/useTime";
import { FormattedMessage } from "react-intl";
import { LangChanger } from "@/components/molecules/LangChanger";

export const Footer = ({
  totalResults,
}: {
  totalResults?: number | undefined;
}) => {
  const { currentHour, hydrated } = useTime();

  if (!hydrated) {
    return null;
  }

  return (
    <div className="w-100v fixed bottom-0">
      <footer className="border-t border-logo bg-base text-logo font-bebas text-xl mt-auto p-4 relative flex flex-row justify-between">
        {totalResults !== undefined && (
          <p>
            {totalResults} <FormattedMessage id="footerArticlesNumber" />
          </p>
        )}
        <p>{currentHour}</p>
        <LangChanger />
      </footer>
    </div>
  );
};
