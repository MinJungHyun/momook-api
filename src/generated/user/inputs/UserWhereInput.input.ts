import * as NestJsGraphQL from "@nestjs/graphql";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { StringNullableFilter } from "../../common/inputs/StringNullableFilter.input";
import { PostListRelationFilter } from "../../post/inputs/PostListRelationFilter.input";

@NestJsGraphQL.InputType('UserWhereInput', { isAbstract: true })
export class UserWhereInput {
  @NestJsGraphQL.Field(() => [UserWhereInput], { nullable: true })
  AND?: UserWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserWhereInput], { nullable: true })
  OR?: UserWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserWhereInput], { nullable: true })
  NOT?: UserWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  email?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => PostListRelationFilter, { nullable: true })
  posts?: PostListRelationFilter | undefined;
}
