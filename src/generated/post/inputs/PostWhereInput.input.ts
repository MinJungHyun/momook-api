import * as NestJsGraphQL from "@nestjs/graphql";
import { BoolNullableFilter } from "../../common/inputs/BoolNullableFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { StringNullableFilter } from "../../common/inputs/StringNullableFilter.input";
import { UserRelationFilter } from "../../user/inputs/UserRelationFilter.input";

@NestJsGraphQL.InputType('PostWhereInput', { isAbstract: true })
export class PostWhereInput {
  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  AND?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  OR?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  NOT?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  content?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => BoolNullableFilter, { nullable: true })
  published?: BoolNullableFilter | undefined;

  @NestJsGraphQL.Field(() => UserRelationFilter, { nullable: true })
  author?: UserRelationFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  authorId?: IntNullableFilter | undefined;
}
