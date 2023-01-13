import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NestedBoolNullableFilter', { isAbstract: true })
export class NestedBoolNullableFilter {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestedBoolNullableFilter, { nullable: true })
  not?: NestedBoolNullableFilter | undefined;
}
