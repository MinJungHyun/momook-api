import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutPostsInput } from "../../user/inputs/UserCreateWithoutPostsInput.input";
import { UserUpdateWithoutPostsInput } from "../../user/inputs/UserUpdateWithoutPostsInput.input";

@NestJsGraphQL.InputType('UserUpsertWithoutPostsInput', { isAbstract: true })
export class UserUpsertWithoutPostsInput {
  @NestJsGraphQL.Field(() => UserUpdateWithoutPostsInput)
  update!: UserUpdateWithoutPostsInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutPostsInput)
  create!: UserCreateWithoutPostsInput;
}
