import * as NestJsGraphQL from "@nestjs/graphql";
import { EnumGenderFieldUpdateOperationsInput } from "../../common/inputs/EnumGenderFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('PlaceUpdateWithoutStampsInput', { isAbstract: true })
export class PlaceUpdateWithoutStampsInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumGenderFieldUpdateOperationsInput, { nullable: true })
  gender?: EnumGenderFieldUpdateOperationsInput | undefined;
}
