import * as NestJsGraphQL from "@nestjs/graphql";
import { EnumErrorTypeFieldUpdateOperationsInput } from "../../common/inputs/EnumErrorTypeFieldUpdateOperationsInput.input";
import { EnumMealTypeFieldUpdateOperationsInput } from "../../common/inputs/EnumMealTypeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { PlaceUpdateOneWithoutStampsNestedInput } from "../../place/inputs/PlaceUpdateOneWithoutStampsNestedInput.input";

@NestJsGraphQL.InputType('StampUpdateInput', { isAbstract: true })
export class StampUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  count?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumMealTypeFieldUpdateOperationsInput, { nullable: true })
  mealType?: EnumMealTypeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumErrorTypeFieldUpdateOperationsInput, { nullable: true })
  errorType?: EnumErrorTypeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => PlaceUpdateOneWithoutStampsNestedInput, { nullable: true })
  place?: PlaceUpdateOneWithoutStampsNestedInput | undefined;
}
