import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { SideMenu } from "../organisms/SideMenu";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="">
          {/* <div className=" lg:block lg:w-2/12 xl:w-1/5">
            <SideMenu />
          </div> */}
          <main className="min-h-screen flex flex-col justify-start  pt-[120px]">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
