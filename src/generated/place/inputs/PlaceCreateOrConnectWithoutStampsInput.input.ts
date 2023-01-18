import * as NestJsGraphQL from "@nestjs/graphql";
import { PlaceCreateWithoutStampsInput } from "../../place/inputs/PlaceCreateWithoutStampsInput.input";
import { PlaceWhereUniqueInput } from "../../place/inputs/PlaceWhereUniqueInput.input";

@NestJsGraphQL.InputType('PlaceCreateOrConnectWithoutStampsInput', { isAbstract: true })
export class PlaceCreateOrConnectWithoutStampsInput {
  @NestJsGraphQL.Field(() => PlaceWhereUniqueInput)
  where!: PlaceWhereUniqueInput;

  @NestJsGraphQL.Field(() => PlaceCreateWithoutStampsInput)
  create!: PlaceCreateWithoutStampsInput;
}
