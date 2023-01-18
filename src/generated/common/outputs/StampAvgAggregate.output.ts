import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('StampAvgAggregate', { isAbstract: true })
export class StampAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  placeId!: number | null;
}
