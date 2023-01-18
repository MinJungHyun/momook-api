import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "../enums";

@NestJsGraphQL.InputType('NestedEnumGenderFilter', { isAbstract: true })
export class NestedEnumGenderFilter {
  @NestJsGraphQL.Field(() => Gender, { nullable: true })
  equals?: "man" | "woman" | undefined;

  @NestJsGraphQL.Field(() => [Gender], { nullable: true })
  in?: Array<"man" | "woman"> | undefined;

  @NestJsGraphQL.Field(() => [Gender], { nullable: true })
  notIn?: Array<"man" | "woman"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGenderFilter, { nullable: true })
  not?: NestedEnumGenderFilter | undefined;
}
