import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('StampWhereUniqueInput', { isAbstract: true })
export class StampWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
