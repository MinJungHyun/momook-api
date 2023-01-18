import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../enums";

@NestJsGraphQL.InputType('EnumMealTypeFieldUpdateOperationsInput', { isAbstract: true })
export class EnumMealTypeFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  set?: "breakfast" | "lunch" | "dinner" | "night" | undefined;
}
