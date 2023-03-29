import "../styles/global.css";
import { Layout } from "@/components/molecules/Layout";
import { AppPropsWithLayout } from "../types/tNextPageLayout";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
