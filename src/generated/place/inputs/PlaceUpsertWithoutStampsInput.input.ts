import * as NestJsGraphQL from "@nestjs/graphql";
import { PlaceCreateWithoutStampsInput } from "../../place/inputs/PlaceCreateWithoutStampsInput.input";
import { PlaceUpdateWithoutStampsInput } from "../../place/inputs/PlaceUpdateWithoutStampsInput.input";

@NestJsGraphQL.InputType('PlaceUpsertWithoutStampsInput', { isAbstract: true })
export class PlaceUpsertWithoutStampsInput {
  @NestJsGraphQL.Field(() => PlaceUpdateWithoutStampsInput)
  update!: PlaceUpdateWithoutStampsInput;

  @NestJsGraphQL.Field(() => PlaceCreateWithoutStampsInput)
  create!: PlaceCreateWithoutStampsInput;
}
