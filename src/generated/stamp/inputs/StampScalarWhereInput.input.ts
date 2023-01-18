import * as NestJsGraphQL from "@nestjs/graphql";
import { EnumErrorTypeFilter } from "../../common/inputs/EnumErrorTypeFilter.input";
import { EnumMealTypeFilter } from "../../common/inputs/EnumMealTypeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";

@NestJsGraphQL.InputType('StampScalarWhereInput', { isAbstract: true })
export class StampScalarWhereInput {
  @NestJsGraphQL.Field(() => [StampScalarWhereInput], { nullable: true })
  AND?: StampScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampScalarWhereInput], { nullable: true })
  OR?: StampScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampScalarWhereInput], { nullable: true })
  NOT?: StampScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  count?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => EnumMealTypeFilter, { nullable: true })
  mealType?: EnumMealTypeFilter | undefined;

  @NestJsGraphQL.Field(() => EnumErrorTypeFilter, { nullable: true })
  errorType?: EnumErrorTypeFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  placeId?: IntNullableFilter | undefined;
}
