import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./ProgressSpinner.module.scss";

const ProgressSpinner = () => {
  const router = useRouter();
  const [show, handleShow] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      handleShow(true);
    });

    router.events.on("routeChangeComplete", () => {
      handleShow(false);
    });

    router.events.on("routeChangeError", () => {
      handleShow(false);
    });
  }, []);

  return (
    <CircularProgress
      style={{ ...(!show && { display: "none" }) }}
      classes={{
        root: styles.spinner,
        circle: styles.circle,
      }}
      disableShrink={true}
      size={30}
    />
  );
};

export default ProgressSpinner;
