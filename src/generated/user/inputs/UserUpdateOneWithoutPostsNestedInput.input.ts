import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutPostsInput } from "../../user/inputs/UserCreateOrConnectWithoutPostsInput.input";
import { UserCreateWithoutPostsInput } from "../../user/inputs/UserCreateWithoutPostsInput.input";
import { UserUpdateWithoutPostsInput } from "../../user/inputs/UserUpdateWithoutPostsInput.input";
import { UserUpsertWithoutPostsInput } from "../../user/inputs/UserUpsertWithoutPostsInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpdateOneWithoutPostsNestedInput', { isAbstract: true })
export class UserUpdateOneWithoutPostsNestedInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutPostsInput, { nullable: true })
  create?: UserCreateWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutPostsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UserUpsertWithoutPostsInput, { nullable: true })
  upsert?: UserUpsertWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateWithoutPostsInput, { nullable: true })
  update?: UserUpdateWithoutPostsInput | undefined;
}
