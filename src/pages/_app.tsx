import "../styles/global.css";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Layout } from "@/components/molecules/Layout";
import { AppPropsWithLayout } from "../types/tNextPageLayout";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
