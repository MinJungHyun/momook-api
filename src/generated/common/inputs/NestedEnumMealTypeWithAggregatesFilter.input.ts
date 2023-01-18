import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../enums";
import { NestedEnumMealTypeFilter } from "./NestedEnumMealTypeFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('NestedEnumMealTypeWithAggregatesFilter', { isAbstract: true })
export class NestedEnumMealTypeWithAggregatesFilter {
  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  equals?: "breakfast" | "lunch" | "dinner" | "night" | undefined;

  @NestJsGraphQL.Field(() => [MealType], { nullable: true })
  in?: Array<"breakfast" | "lunch" | "dinner" | "night"> | undefined;

  @NestJsGraphQL.Field(() => [MealType], { nullable: true })
  notIn?: Array<"breakfast" | "lunch" | "dinner" | "night"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeWithAggregatesFilter, { nullable: true })
  not?: NestedEnumMealTypeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeFilter, { nullable: true })
  _min?: NestedEnumMealTypeFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeFilter, { nullable: true })
  _max?: NestedEnumMealTypeFilter | undefined;
}
