import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../enums";
import { NestedEnumMealTypeFilter } from "./NestedEnumMealTypeFilter.input";

@NestJsGraphQL.InputType('EnumMealTypeFilter', { isAbstract: true })
export class EnumMealTypeFilter {
  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  equals?: "breakfast" | "lunch" | "dinner" | "night" | undefined;

  @NestJsGraphQL.Field(() => [MealType], { nullable: true })
  in?: Array<"breakfast" | "lunch" | "dinner" | "night"> | undefined;

  @NestJsGraphQL.Field(() => [MealType], { nullable: true })
  notIn?: Array<"breakfast" | "lunch" | "dinner" | "night"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeFilter, { nullable: true })
  not?: NestedEnumMealTypeFilter | undefined;
}
