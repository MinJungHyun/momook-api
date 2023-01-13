import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PostCreateManyInput', { isAbstract: true })
export class PostCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  authorId?: number | undefined;
}
