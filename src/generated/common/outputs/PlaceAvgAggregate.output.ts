import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PlaceAvgAggregate', { isAbstract: true })
export class PlaceAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;
}
