import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType } from "../enums";
import { NestedEnumErrorTypeFilter } from "./NestedEnumErrorTypeFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('NestedEnumErrorTypeWithAggregatesFilter', { isAbstract: true })
export class NestedEnumErrorTypeWithAggregatesFilter {
  @NestJsGraphQL.Field(() => ErrorType, { nullable: true })
  equals?: "notFound" | "alreadyExists" | undefined;

  @NestJsGraphQL.Field(() => [ErrorType], { nullable: true })
  in?: Array<"notFound" | "alreadyExists"> | undefined;

  @NestJsGraphQL.Field(() => [ErrorType], { nullable: true })
  notIn?: Array<"notFound" | "alreadyExists"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumErrorTypeWithAggregatesFilter, { nullable: true })
  not?: NestedEnumErrorTypeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumErrorTypeFilter, { nullable: true })
  _min?: NestedEnumErrorTypeFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumErrorTypeFilter, { nullable: true })
  _max?: NestedEnumErrorTypeFilter | undefined;
}
