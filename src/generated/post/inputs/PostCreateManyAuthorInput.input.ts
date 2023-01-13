import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PostCreateManyAuthorInput', { isAbstract: true })
export class PostCreateManyAuthorInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published?: boolean | undefined;
}
