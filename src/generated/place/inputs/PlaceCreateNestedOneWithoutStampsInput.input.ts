import * as NestJsGraphQL from "@nestjs/graphql";
import { PlaceCreateOrConnectWithoutStampsInput } from "../../place/inputs/PlaceCreateOrConnectWithoutStampsInput.input";
import { PlaceCreateWithoutStampsInput } from "../../place/inputs/PlaceCreateWithoutStampsInput.input";
import { PlaceWhereUniqueInput } from "../../place/inputs/PlaceWhereUniqueInput.input";

@NestJsGraphQL.InputType('PlaceCreateNestedOneWithoutStampsInput', { isAbstract: true })
export class PlaceCreateNestedOneWithoutStampsInput {
  @NestJsGraphQL.Field(() => PlaceCreateWithoutStampsInput, { nullable: true })
  create?: PlaceCreateWithoutStampsInput | undefined;

  @NestJsGraphQL.Field(() => PlaceCreateOrConnectWithoutStampsInput, { nullable: true })
  connectOrCreate?: PlaceCreateOrConnectWithoutStampsInput | undefined;

  @NestJsGraphQL.Field(() => PlaceWhereUniqueInput, { nullable: true })
  connect?: PlaceWhereUniqueInput | undefined;
}
