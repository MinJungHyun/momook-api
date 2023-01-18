import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PlaceCount', { isAbstract: true })
export class PlaceCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  stamps!: number;
}
