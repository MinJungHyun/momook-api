import * as NestJsGraphQL from "@nestjs/graphql";
import { EnumGenderFieldUpdateOperationsInput } from "../../common/inputs/EnumGenderFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { StampUpdateManyWithoutPlaceNestedInput } from "../../stamp/inputs/StampUpdateManyWithoutPlaceNestedInput.input";

@NestJsGraphQL.InputType('PlaceUpdateInput', { isAbstract: true })
export class PlaceUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumGenderFieldUpdateOperationsInput, { nullable: true })
  gender?: EnumGenderFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StampUpdateManyWithoutPlaceNestedInput, { nullable: true })
  stamps?: StampUpdateManyWithoutPlaceNestedInput | undefined;
}
