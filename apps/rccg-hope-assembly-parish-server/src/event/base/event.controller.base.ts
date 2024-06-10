/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EventService } from "../event.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EventCreateInput } from "./EventCreateInput";
import { Event } from "./Event";
import { EventFindManyArgs } from "./EventFindManyArgs";
import { EventWhereUniqueInput } from "./EventWhereUniqueInput";
import { EventUpdateInput } from "./EventUpdateInput";
import { LivestreamFindManyArgs } from "../../livestream/base/LivestreamFindManyArgs";
import { Livestream } from "../../livestream/base/Livestream";
import { LivestreamWhereUniqueInput } from "../../livestream/base/LivestreamWhereUniqueInput";
import { AboutUsContent } from "../AboutUsContent";
import { HomepageContent } from "../HomepageContent";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EventControllerBase {
  constructor(
    protected readonly service: EventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Event })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEvent(@common.Body() data: EventCreateInput): Promise<Event> {
    return await this.service.createEvent({
      data: data,
      select: {
        createdAt: true,
        date: true,
        description: true,
        endTime: true,
        id: true,
        name: true,
        startTime: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Event] })
  @ApiNestedQuery(EventFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async events(@common.Req() request: Request): Promise<Event[]> {
    const args = plainToClass(EventFindManyArgs, request.query);
    return this.service.events({
      ...args,
      select: {
        createdAt: true,
        date: true,
        description: true,
        endTime: true,
        id: true,
        name: true,
        startTime: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async event(
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Event | null> {
    const result = await this.service.event({
      where: params,
      select: {
        createdAt: true,
        date: true,
        description: true,
        endTime: true,
        id: true,
        name: true,
        startTime: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEvent(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() data: EventUpdateInput
  ): Promise<Event | null> {
    try {
      return await this.service.updateEvent({
        where: params,
        data: data,
        select: {
          createdAt: true,
          date: true,
          description: true,
          endTime: true,
          id: true,
          name: true,
          startTime: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEvent(
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Event | null> {
    try {
      return await this.service.deleteEvent({
        where: params,
        select: {
          createdAt: true,
          date: true,
          description: true,
          endTime: true,
          id: true,
          name: true,
          startTime: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/livestreams")
  @ApiNestedQuery(LivestreamFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Livestream",
    action: "read",
    possession: "any",
  })
  async findLivestreams(
    @common.Req() request: Request,
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Livestream[]> {
    const query = plainToClass(LivestreamFindManyArgs, request.query);
    const results = await this.service.findLivestreams(params.id, {
      ...query,
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
        url: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/livestreams")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async connectLivestreams(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: LivestreamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      livestreams: {
        connect: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/livestreams")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async updateLivestreams(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: LivestreamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      livestreams: {
        set: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/livestreams")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async disconnectLivestreams(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: LivestreamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      livestreams: {
        disconnect: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/about-us-content")
  @swagger.ApiOkResponse({
    type: AboutUsContent,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async AboutUsContent(
    @common.Body()
    body: string
  ): Promise<AboutUsContent> {
    return this.service.AboutUsContent(body);
  }

  @common.Get("/:id/get-about-us")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetAboutUs(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.GetAboutUs(body);
  }

  @common.Get("/:id/get-homepage")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetHomepage(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.GetHomepage(body);
  }

  @common.Get("/homepage-content")
  @swagger.ApiOkResponse({
    type: HomepageContent,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async HomepageContent(
    @common.Body()
    body: string
  ): Promise<HomepageContent> {
    return this.service.HomepageContent(body);
  }
}
