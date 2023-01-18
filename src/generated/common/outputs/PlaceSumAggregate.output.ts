import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PlaceSumAggregate', { isAbstract: true })
export class PlaceSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;
}
