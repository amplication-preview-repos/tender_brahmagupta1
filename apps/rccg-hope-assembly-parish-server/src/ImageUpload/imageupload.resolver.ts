import * as graphql from "@nestjs/graphql";
import { ImageUploadService } from "./imageupload.service";

export class ImageUploadResolver {
  constructor(protected readonly service: ImageUploadService) {}

  @graphql.Mutation(() => String)
  async UploadImage(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadImage(args);
  }
}
