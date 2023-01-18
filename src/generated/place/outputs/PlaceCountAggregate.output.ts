import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PlaceCountAggregate', { isAbstract: true })
export class PlaceCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  name!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  gender!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
