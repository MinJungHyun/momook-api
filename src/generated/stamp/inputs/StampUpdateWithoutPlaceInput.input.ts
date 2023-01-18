import * as NestJsGraphQL from "@nestjs/graphql";
import { EnumErrorTypeFieldUpdateOperationsInput } from "../../common/inputs/EnumErrorTypeFieldUpdateOperationsInput.input";
import { EnumMealTypeFieldUpdateOperationsInput } from "../../common/inputs/EnumMealTypeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('StampUpdateWithoutPlaceInput', { isAbstract: true })
export class StampUpdateWithoutPlaceInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  count?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumMealTypeFieldUpdateOperationsInput, { nullable: true })
  mealType?: EnumMealTypeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumErrorTypeFieldUpdateOperationsInput, { nullable: true })
  errorType?: EnumErrorTypeFieldUpdateOperationsInput | undefined;
}
