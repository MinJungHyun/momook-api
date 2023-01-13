import * as NestJsGraphQL from "@nestjs/graphql";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringNullableWithAggregatesFilter } from "../../common/inputs/StringNullableWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('UserScalarWhereWithAggregatesInput', { isAbstract: true })
export class UserScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  name?: StringNullableWithAggregatesFilter | undefined;
}
