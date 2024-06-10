import { Injectable } from "@nestjs/common";

@Injectable()
export class ImageUploadService {
  constructor() {}
  async UploadImage(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
