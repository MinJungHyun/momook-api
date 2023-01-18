import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "../enums";
import { NestedEnumGenderFilter } from "./NestedEnumGenderFilter.input";
import { NestedEnumGenderWithAggregatesFilter } from "./NestedEnumGenderWithAggregatesFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('EnumGenderWithAggregatesFilter', { isAbstract: true })
export class EnumGenderWithAggregatesFilter {
  @NestJsGraphQL.Field(() => Gender, { nullable: true })
  equals?: "man" | "woman" | undefined;

  @NestJsGraphQL.Field(() => [Gender], { nullable: true })
  in?: Array<"man" | "woman"> | undefined;

  @NestJsGraphQL.Field(() => [Gender], { nullable: true })
  notIn?: Array<"man" | "woman"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGenderWithAggregatesFilter, { nullable: true })
  not?: NestedEnumGenderWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGenderFilter, { nullable: true })
  _min?: NestedEnumGenderFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGenderFilter, { nullable: true })
  _max?: NestedEnumGenderFilter | undefined;
}
