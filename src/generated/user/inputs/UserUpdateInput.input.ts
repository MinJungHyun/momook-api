import * as NestJsGraphQL from "@nestjs/graphql";
import { NullableStringFieldUpdateOperationsInput } from "../../common/inputs/NullableStringFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { PostUpdateManyWithoutAuthorNestedInput } from "../../post/inputs/PostUpdateManyWithoutAuthorNestedInput.input";

@NestJsGraphQL.InputType('UserUpdateInput', { isAbstract: true })
export class UserUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => PostUpdateManyWithoutAuthorNestedInput, { nullable: true })
  posts?: PostUpdateManyWithoutAuthorNestedInput | undefined;
}
