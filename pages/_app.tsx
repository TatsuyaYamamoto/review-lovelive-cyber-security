import { FC, useEffect } from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";

import { renderClickEffect } from "@/helpers/clickEffect";
import { store } from "@/redux/store";
import Seo from "@/components/Seo";
import ProgressSpinner from "@/components/ProgressSpinner";

import "../src/styles/globals.css";
import styles from "@/styles/pages_app.module.scss";

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
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinnerInner}>
          <ProgressSpinner />
        </div>
      </div>
    </>
  );
};

export default MyApp;
