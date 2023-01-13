import * as NestJsGraphQL from "@nestjs/graphql";
import { BoolNullableFilter } from "../../common/inputs/BoolNullableFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { StringNullableFilter } from "../../common/inputs/StringNullableFilter.input";

@NestJsGraphQL.InputType('PostScalarWhereInput', { isAbstract: true })
export class PostScalarWhereInput {
  @NestJsGraphQL.Field(() => [PostScalarWhereInput], { nullable: true })
  AND?: PostScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereInput], { nullable: true })
  OR?: PostScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereInput], { nullable: true })
  NOT?: PostScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  content?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => BoolNullableFilter, { nullable: true })
  published?: BoolNullableFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  authorId?: IntNullableFilter | undefined;
}
