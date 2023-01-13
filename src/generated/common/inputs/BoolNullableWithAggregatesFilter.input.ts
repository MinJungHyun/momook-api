import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedBoolNullableFilter } from "./NestedBoolNullableFilter.input";
import { NestedBoolNullableWithAggregatesFilter } from "./NestedBoolNullableWithAggregatesFilter.input";
import { NestedIntNullableFilter } from "./NestedIntNullableFilter.input";

@NestJsGraphQL.InputType('BoolNullableWithAggregatesFilter', { isAbstract: true })
export class BoolNullableWithAggregatesFilter {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestedBoolNullableWithAggregatesFilter, { nullable: true })
  not?: NestedBoolNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedBoolNullableFilter, { nullable: true })
  _min?: NestedBoolNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedBoolNullableFilter, { nullable: true })
  _max?: NestedBoolNullableFilter | undefined;
}
