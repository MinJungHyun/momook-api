import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('StampSumAggregate', { isAbstract: true })
export class StampSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  placeId!: number | null;
}
