/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LivestreamWhereUniqueInput } from "./LivestreamWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LivestreamUpdateInput } from "./LivestreamUpdateInput";

@ArgsType()
class UpdateLivestreamArgs {
  @ApiProperty({
    required: true,
    type: () => LivestreamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LivestreamWhereUniqueInput)
  @Field(() => LivestreamWhereUniqueInput, { nullable: false })
  where!: LivestreamWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LivestreamUpdateInput,
  })
  @ValidateNested()
  @Type(() => LivestreamUpdateInput)
  @Field(() => LivestreamUpdateInput, { nullable: false })
  data!: LivestreamUpdateInput;
}

export { UpdateLivestreamArgs as UpdateLivestreamArgs };