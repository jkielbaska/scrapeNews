import Clock from "react-live-clock";

// aktualna godzina
// liczba artykułów wyświetlanych w głównym contencie

export const Footer = ({
  totalResults,
}: {
  totalResults?: number | undefined;
}) => {
  //wyświetl aktualną datę po prawej stronie footera w formacie dd.mm.yyyy

  return (
    <div className="w-100v">
      <footer className=" mt-auto bg-gray-800 text-white p-4 relative flex flex-row justify-between">
        {/* <Clock format="HH:mm:ss" interval={1000} ticking={true} /> */}
        {totalResults !== undefined && (
          <p> {totalResults} articles on the page</p>
        )}
      </footer>
    </div>
  );
};
