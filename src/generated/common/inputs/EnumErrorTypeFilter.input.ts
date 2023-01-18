import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType } from "../enums";
import { NestedEnumErrorTypeFilter } from "./NestedEnumErrorTypeFilter.input";

@NestJsGraphQL.InputType('EnumErrorTypeFilter', { isAbstract: true })
export class EnumErrorTypeFilter {
  @NestJsGraphQL.Field(() => ErrorType, { nullable: true })
  equals?: "notFound" | "alreadyExists" | undefined;

  @NestJsGraphQL.Field(() => [ErrorType], { nullable: true })
  in?: Array<"notFound" | "alreadyExists"> | undefined;

  @NestJsGraphQL.Field(() => [ErrorType], { nullable: true })
  notIn?: Array<"notFound" | "alreadyExists"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumErrorTypeFilter, { nullable: true })
  not?: NestedEnumErrorTypeFilter | undefined;
}
