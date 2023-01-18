import * as NestJsGraphQL from "@nestjs/graphql";
import { EnumErrorTypeFilter } from "../../common/inputs/EnumErrorTypeFilter.input";
import { EnumMealTypeFilter } from "../../common/inputs/EnumMealTypeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { PlaceRelationFilter } from "../../place/inputs/PlaceRelationFilter.input";

@NestJsGraphQL.InputType('StampWhereInput', { isAbstract: true })
export class StampWhereInput {
  @NestJsGraphQL.Field(() => [StampWhereInput], { nullable: true })
  AND?: StampWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampWhereInput], { nullable: true })
  OR?: StampWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampWhereInput], { nullable: true })
  NOT?: StampWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  count?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => EnumMealTypeFilter, { nullable: true })
  mealType?: EnumMealTypeFilter | undefined;

  @NestJsGraphQL.Field(() => EnumErrorTypeFilter, { nullable: true })
  errorType?: EnumErrorTypeFilter | undefined;

  @NestJsGraphQL.Field(() => PlaceRelationFilter, { nullable: true })
  place?: PlaceRelationFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  placeId?: IntNullableFilter | undefined;
}
