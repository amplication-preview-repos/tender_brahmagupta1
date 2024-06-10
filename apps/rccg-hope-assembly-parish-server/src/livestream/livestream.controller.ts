import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LivestreamService } from "./livestream.service";
import { LivestreamControllerBase } from "./base/livestream.controller.base";

@swagger.ApiTags("livestreams")
@common.Controller("livestreams")
export class LivestreamController extends LivestreamControllerBase {
  constructor(
    protected readonly service: LivestreamService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
