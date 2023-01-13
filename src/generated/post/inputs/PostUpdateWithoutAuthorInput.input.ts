import * as NestJsGraphQL from "@nestjs/graphql";
import { NullableBoolFieldUpdateOperationsInput } from "../../common/inputs/NullableBoolFieldUpdateOperationsInput.input";
import { NullableStringFieldUpdateOperationsInput } from "../../common/inputs/NullableStringFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('PostUpdateWithoutAuthorInput', { isAbstract: true })
export class PostUpdateWithoutAuthorInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  content?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  published?: NullableBoolFieldUpdateOperationsInput | undefined;
}
