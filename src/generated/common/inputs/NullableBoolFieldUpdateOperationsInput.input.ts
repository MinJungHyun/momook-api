import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NullableBoolFieldUpdateOperationsInput', { isAbstract: true })
export class NullableBoolFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  set?: boolean | undefined;
}
