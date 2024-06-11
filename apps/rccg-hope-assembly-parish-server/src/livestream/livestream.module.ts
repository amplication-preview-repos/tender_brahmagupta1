import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LivestreamModuleBase } from "./base/livestream.module.base";
import { LivestreamService } from "./livestream.service";
import { LivestreamController } from "./livestream.controller";
import { LivestreamResolver } from "./livestream.resolver";

@Module({
  imports: [LivestreamModuleBase, forwardRef(() => AuthModule)],
  controllers: [LivestreamController],
  providers: [LivestreamService, LivestreamResolver],
  exports: [LivestreamService],
})
export class LivestreamModule {}
