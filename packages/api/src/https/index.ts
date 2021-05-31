import { logger } from "firebase-functions";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import {
  ExpressAdapter,
  NestExpressApplication,
} from "@nestjs/platform-express";

import express from "express";
import helmet from "helmet";

import AppModule from "@/https/app.module";

let _server: express.Express | null = null;

const createNestServer = async (): Promise<express.Express> => {
  if (_server) {
    return _server;
  }

  logger.info(`no express instance exists. create with nest factory.`);
  const server = express();

  // https://docs.nestjs.com/techniques/logger
  process.env.NO_COLOR = "true";
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server)
  );
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.enableCors();

  await app.init();
  logger.info(`nest app is initialized.`);

  _server = server;
  return _server;
};

export default createNestServer;
