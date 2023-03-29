import { useTime } from "@/hooks/useTime";

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
      <footer className=" mt-auto bg-gray-800 text-white p-4 relative flex flex-row justify-between">
        {totalResults !== undefined && (
          <p> {totalResults} articles on the page</p>
        )}
        <p>{currentHour}</p>
      </footer>
    </div>
  );
};
