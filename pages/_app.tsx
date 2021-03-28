import { FC, useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import "../src/styles/globals.css";

import { renderClickEffect } from "@/helpers/clickEffect";

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
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
