import * as NestJsGraphQL from "@nestjs/graphql";
import { PlaceCreateOrConnectWithoutStampsInput } from "../../place/inputs/PlaceCreateOrConnectWithoutStampsInput.input";
import { PlaceCreateWithoutStampsInput } from "../../place/inputs/PlaceCreateWithoutStampsInput.input";
import { PlaceUpdateWithoutStampsInput } from "../../place/inputs/PlaceUpdateWithoutStampsInput.input";
import { PlaceUpsertWithoutStampsInput } from "../../place/inputs/PlaceUpsertWithoutStampsInput.input";
import { PlaceWhereUniqueInput } from "../../place/inputs/PlaceWhereUniqueInput.input";

@NestJsGraphQL.InputType('PlaceUpdateOneWithoutStampsNestedInput', { isAbstract: true })
export class PlaceUpdateOneWithoutStampsNestedInput {
  @NestJsGraphQL.Field(() => PlaceCreateWithoutStampsInput, { nullable: true })
  create?: PlaceCreateWithoutStampsInput | undefined;

  @NestJsGraphQL.Field(() => PlaceCreateOrConnectWithoutStampsInput, { nullable: true })
  connectOrCreate?: PlaceCreateOrConnectWithoutStampsInput | undefined;

  @NestJsGraphQL.Field(() => PlaceUpsertWithoutStampsInput, { nullable: true })
  upsert?: PlaceUpsertWithoutStampsInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => PlaceWhereUniqueInput, { nullable: true })
  connect?: PlaceWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => PlaceUpdateWithoutStampsInput, { nullable: true })
  update?: PlaceUpdateWithoutStampsInput | undefined;
}
