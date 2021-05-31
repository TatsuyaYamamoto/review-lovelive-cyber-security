import { Injectable } from "@nestjs/common";

import vision from "@google-cloud/vision";
const visionApiClient = new vision.v1.ImageAnnotatorClient({
  projectId: "api-app-t28-dev",
  keyFilename: "",
});

@Injectable()
export default class GoogleApiService {
  async detectText(imageBase64: string) {
    const responses = await visionApiClient.annotateImage({
      image: {
        content: imageBase64,
      },
      features: [{ type: "TEXT_DETECTION" }],
    });

    const response = responses[0];

    return {
      ...response,
    };
  }
  async hoge() {}
}
