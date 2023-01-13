import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateNestedOneWithoutPostsInput } from "../../user/inputs/UserCreateNestedOneWithoutPostsInput.input";

@NestJsGraphQL.InputType('PostCreateInput', { isAbstract: true })
export class PostCreateInput {
  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published?: boolean | undefined;

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutPostsInput, { nullable: true })
  author?: UserCreateNestedOneWithoutPostsInput | undefined;
}
