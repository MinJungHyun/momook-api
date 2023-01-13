import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('IntFilter', { isAbstract: true })
export class IntFilter {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Int], { nullable: true })
  in?: number[] | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Int], { nullable: true })
  notIn?: number[] | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  lt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  lte?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  gt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  gte?: number | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  not?: NestedIntFilter | undefined;
}
