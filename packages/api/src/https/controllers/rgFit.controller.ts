import { Controller, Post, Body } from "@nestjs/common";
import { IsNotEmpty, IsString } from "class-validator";

import GoogleApiService from "@/https/services/googleApi.service";

class RgFitSaveForm {
  @IsNotEmpty()
  @IsString()
  imageBase64!: string;
}

@Controller("rg-fit")
export default class RgFitController {
  constructor(private readonly googleApiService: GoogleApiService) {}

  @Post("save")
  async crawler(@Body() form: RgFitSaveForm): Promise<{}> {
    const { imageBase64 } = form;
    const result = this.googleApiService.detectText(imageBase64);
    return { ...result };
  }
}
