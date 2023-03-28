import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { SideMenu } from "../organisms/SideMenu";
// import { useDispatch, useSelector } from "react-redux";
// import { setLayout } from "@/redux/store";  //docelowo layout w layoucie

export const Layout = ({
  children,
  totalResults,
}: {
  children: ReactNode;
  totalResults?: number;
}) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="">
          {/* <div className=" lg:block lg:w-2/12 xl:w-1/5">
            <SideMenu />
          </div> */}
          <main className="min-h-screen pt-[120px] flex flex-col">
            {children}
          </main>
        </div>
        {/* <Footer totalResults={children?.props.countryNews.totalResults} /> */}
      </div>
    </>
  );
};
//children.props.countryNews.totalResults?? that should be here, not on every page https://stackoverflow.com/questions/60893121/how-to-properly-type-react-children-and-react-cloneelement
