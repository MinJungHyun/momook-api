import * as NestJsGraphQL from "@nestjs/graphql";
import { PlaceWhereInput } from "../../place/inputs/PlaceWhereInput.input";

@NestJsGraphQL.InputType('PlaceRelationFilter', { isAbstract: true })
export class PlaceRelationFilter {
  @NestJsGraphQL.Field(() => PlaceWhereInput, { nullable: true })
  is?: PlaceWhereInput | undefined;

  @NestJsGraphQL.Field(() => PlaceWhereInput, { nullable: true })
  isNot?: PlaceWhereInput | undefined;
}
