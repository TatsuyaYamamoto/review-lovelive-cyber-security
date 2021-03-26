import { useEffect } from "react";
import Head from "next/head";

import "../src/styles/globals.css";

import { renderClickEffect } from "@/helpers/clickEffect";

function MyApp({ Component, pageProps }) {
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
}

export default MyApp;
