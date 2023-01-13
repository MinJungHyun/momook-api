import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PostCreateWithoutAuthorInput', { isAbstract: true })
export class PostCreateWithoutAuthorInput {
  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published?: boolean | undefined;
}
