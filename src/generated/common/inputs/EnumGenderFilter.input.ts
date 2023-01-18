import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "../enums";
import { NestedEnumGenderFilter } from "./NestedEnumGenderFilter.input";

@NestJsGraphQL.InputType('EnumGenderFilter', { isAbstract: true })
export class EnumGenderFilter {
  @NestJsGraphQL.Field(() => Gender, { nullable: true })
  equals?: "man" | "woman" | undefined;

  @NestJsGraphQL.Field(() => [Gender], { nullable: true })
  in?: Array<"man" | "woman"> | undefined;

  @NestJsGraphQL.Field(() => [Gender], { nullable: true })
  notIn?: Array<"man" | "woman"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGenderFilter, { nullable: true })
  not?: NestedEnumGenderFilter | undefined;
}
