import { ReactNode } from "react";
import { Header } from "../organisms/Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <div>
          <main className="pt-[120px] flex flex-col">{children}</main>
        </div>
      </div>
    </>
  );
};
