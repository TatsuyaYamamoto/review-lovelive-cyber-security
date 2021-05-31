import moduleAlias from "module-alias";
moduleAlias.addAlias("@", __dirname);

/* eslint import/first:0 */
import * as functions from "firebase-functions";

import "@/firebaseApp";
import createServer from "@/https";

export const api = functions
  .region("asia-northeast1")
  .https.onRequest(async (...args) => {
    const server = await createServer();
    server(...args);
  });
