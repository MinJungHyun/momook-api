import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedBoolNullableFilter } from "./NestedBoolNullableFilter.input";

@NestJsGraphQL.InputType('BoolNullableFilter', { isAbstract: true })
export class BoolNullableFilter {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestedBoolNullableFilter, { nullable: true })
  not?: NestedBoolNullableFilter | undefined;
}
