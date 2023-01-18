import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType } from "../enums";

@NestJsGraphQL.InputType('NestedEnumErrorTypeFilter', { isAbstract: true })
export class NestedEnumErrorTypeFilter {
  @NestJsGraphQL.Field(() => ErrorType, { nullable: true })
  equals?: "notFound" | "alreadyExists" | undefined;

  @NestJsGraphQL.Field(() => [ErrorType], { nullable: true })
  in?: Array<"notFound" | "alreadyExists"> | undefined;

  @NestJsGraphQL.Field(() => [ErrorType], { nullable: true })
  notIn?: Array<"notFound" | "alreadyExists"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumErrorTypeFilter, { nullable: true })
  not?: NestedEnumErrorTypeFilter | undefined;
}
