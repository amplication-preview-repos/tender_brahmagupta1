import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LivestreamServiceBase } from "./base/livestream.service.base";

@Injectable()
export class LivestreamService extends LivestreamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
