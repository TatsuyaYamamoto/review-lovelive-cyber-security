import { FC, useEffect } from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { AppProps } from "next/app";

import "../src/styles/globals.css";

import { renderClickEffect } from "@/helpers/clickEffect";
import { store } from "@/redux/store";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    document.addEventListener("click", renderClickEffect);
  }, []);

  return (
    <>
      <Head>
        {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
