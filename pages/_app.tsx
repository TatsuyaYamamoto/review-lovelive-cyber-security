import { FC, useEffect } from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { AppProps } from "next/app";

import "../src/styles/globals.css";

import ProgressSpinner from "@/components/ProgressSpinner";
import { renderClickEffect } from "@/helpers/clickEffect";
import { store } from "@/redux/store";
import Seo from "@/components/Seo";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    document.addEventListener("click", renderClickEffect);
  }, []);

  return (
    <>
      <Seo />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ProgressSpinner />
    </>
  );
};

export default MyApp;
