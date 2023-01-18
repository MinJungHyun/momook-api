import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "../enums";

@NestJsGraphQL.InputType('EnumGenderFieldUpdateOperationsInput', { isAbstract: true })
export class EnumGenderFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => Gender, { nullable: true })
  set?: "man" | "woman" | undefined;
}
