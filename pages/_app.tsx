import { FC, useEffect } from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import { renderClickEffect } from "@/helpers/clickEffect";
import { store } from "@/redux/store";
import Seo from "@/components/Seo";
import ProgressSpinner from "@/components/ProgressSpinner";

import "../src/styles/globals.css";
import styles from "@/styles/pages_app.module.scss";
import { GA_TRACKING_ID } from "@/helpers/constants";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    document.addEventListener("click", renderClickEffect);
  }, []);

  return (
    <>
      <Seo />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinnerInner}>
          <ProgressSpinner />
        </div>
      </div>
    </>
  );
};

export default MyApp;
