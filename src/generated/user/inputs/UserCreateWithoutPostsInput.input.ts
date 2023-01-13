import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('UserCreateWithoutPostsInput', { isAbstract: true })
export class UserCreateWithoutPostsInput {
  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;
}
