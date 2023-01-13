import * as NestJsGraphQL from "@nestjs/graphql";
import { BoolNullableWithAggregatesFilter } from "../../common/inputs/BoolNullableWithAggregatesFilter.input";
import { IntNullableWithAggregatesFilter } from "../../common/inputs/IntNullableWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringNullableWithAggregatesFilter } from "../../common/inputs/StringNullableWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('PostScalarWhereWithAggregatesInput', { isAbstract: true })
export class PostScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  AND?: PostScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  OR?: PostScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: PostScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  content?: StringNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => BoolNullableWithAggregatesFilter, { nullable: true })
  published?: BoolNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  authorId?: IntNullableWithAggregatesFilter | undefined;
}
