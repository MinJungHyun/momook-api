import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('UserCreateManyInput', { isAbstract: true })
export class UserCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;
}
