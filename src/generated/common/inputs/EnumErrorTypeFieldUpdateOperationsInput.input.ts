import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType } from "../enums";

@NestJsGraphQL.InputType('EnumErrorTypeFieldUpdateOperationsInput', { isAbstract: true })
export class EnumErrorTypeFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => ErrorType, { nullable: true })
  set?: "notFound" | "alreadyExists" | undefined;
}
