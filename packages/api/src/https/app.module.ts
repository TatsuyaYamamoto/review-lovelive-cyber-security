import { Module } from "@nestjs/common";

import RgFitController from "@/https/controllers/rgFit.controller";
import GoogleApiService from "@/https/services/googleApi.service";

@Module({
  imports: [],
  controllers: [RgFitController],
  providers: [GoogleApiService],
})
export default class AppModule {}
