import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ImageUploadService } from "./imageupload.service";

@swagger.ApiTags("imageUploads")
@common.Controller("imageUploads")
export class ImageUploadController {
  constructor(protected readonly service: ImageUploadService) {}

  @common.Post("/upload-image")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadImage(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UploadImage(body);
      }
}
