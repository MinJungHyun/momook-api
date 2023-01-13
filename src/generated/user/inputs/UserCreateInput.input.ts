import * as NestJsGraphQL from "@nestjs/graphql";
import { PostCreateNestedManyWithoutAuthorInput } from "../../post/inputs/PostCreateNestedManyWithoutAuthorInput.input";

@NestJsGraphQL.InputType('UserCreateInput', { isAbstract: true })
export class UserCreateInput {
  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;

  @NestJsGraphQL.Field(() => PostCreateNestedManyWithoutAuthorInput, { nullable: true })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
}
