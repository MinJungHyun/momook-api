import * as NestJsGraphQL from "@nestjs/graphql";
import { NullableBoolFieldUpdateOperationsInput } from "../../common/inputs/NullableBoolFieldUpdateOperationsInput.input";
import { NullableStringFieldUpdateOperationsInput } from "../../common/inputs/NullableStringFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { UserUpdateOneWithoutPostsNestedInput } from "../../user/inputs/UserUpdateOneWithoutPostsNestedInput.input";

@NestJsGraphQL.InputType('PostUpdateInput', { isAbstract: true })
export class PostUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  content?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  published?: NullableBoolFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateOneWithoutPostsNestedInput, { nullable: true })
  author?: UserUpdateOneWithoutPostsNestedInput | undefined;
}
