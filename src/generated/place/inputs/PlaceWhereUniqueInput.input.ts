import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PlaceWhereUniqueInput', { isAbstract: true })
export class PlaceWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
