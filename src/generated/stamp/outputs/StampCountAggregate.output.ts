import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('StampCountAggregate', { isAbstract: true })
export class StampCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  count!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  mealType!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  errorType!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  placeId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
