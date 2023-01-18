import * as NestJsGraphQL from "@nestjs/graphql";
import { EnumGenderWithAggregatesFilter } from "../../common/inputs/EnumGenderWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('PlaceScalarWhereWithAggregatesInput', { isAbstract: true })
export class PlaceScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [PlaceScalarWhereWithAggregatesInput], { nullable: true })
  AND?: PlaceScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PlaceScalarWhereWithAggregatesInput], { nullable: true })
  OR?: PlaceScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PlaceScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: PlaceScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => EnumGenderWithAggregatesFilter, { nullable: true })
  gender?: EnumGenderWithAggregatesFilter | undefined;
}
