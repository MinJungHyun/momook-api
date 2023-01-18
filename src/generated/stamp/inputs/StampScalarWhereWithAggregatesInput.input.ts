import * as NestJsGraphQL from "@nestjs/graphql";
import { EnumErrorTypeWithAggregatesFilter } from "../../common/inputs/EnumErrorTypeWithAggregatesFilter.input";
import { EnumMealTypeWithAggregatesFilter } from "../../common/inputs/EnumMealTypeWithAggregatesFilter.input";
import { IntNullableWithAggregatesFilter } from "../../common/inputs/IntNullableWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('StampScalarWhereWithAggregatesInput', { isAbstract: true })
export class StampScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [StampScalarWhereWithAggregatesInput], { nullable: true })
  AND?: StampScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampScalarWhereWithAggregatesInput], { nullable: true })
  OR?: StampScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: StampScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  count?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => EnumMealTypeWithAggregatesFilter, { nullable: true })
  mealType?: EnumMealTypeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => EnumErrorTypeWithAggregatesFilter, { nullable: true })
  errorType?: EnumErrorTypeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  placeId?: IntNullableWithAggregatesFilter | undefined;
}
