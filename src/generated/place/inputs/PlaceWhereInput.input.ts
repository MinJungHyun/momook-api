import * as NestJsGraphQL from "@nestjs/graphql";
import { EnumGenderFilter } from "../../common/inputs/EnumGenderFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { StampListRelationFilter } from "../../stamp/inputs/StampListRelationFilter.input";

@NestJsGraphQL.InputType('PlaceWhereInput', { isAbstract: true })
export class PlaceWhereInput {
  @NestJsGraphQL.Field(() => [PlaceWhereInput], { nullable: true })
  AND?: PlaceWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PlaceWhereInput], { nullable: true })
  OR?: PlaceWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PlaceWhereInput], { nullable: true })
  NOT?: PlaceWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => EnumGenderFilter, { nullable: true })
  gender?: EnumGenderFilter | undefined;

  @NestJsGraphQL.Field(() => StampListRelationFilter, { nullable: true })
  stamps?: StampListRelationFilter | undefined;
}
