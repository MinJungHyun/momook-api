import * as NestJsGraphQL from "@nestjs/graphql";
import { StampScalarWhereInput } from "../../stamp/inputs/StampScalarWhereInput.input";
import { StampUpdateManyMutationInput } from "../../stamp/inputs/StampUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('StampUpdateManyWithWhereWithoutPlaceInput', { isAbstract: true })
export class StampUpdateManyWithWhereWithoutPlaceInput {
  @NestJsGraphQL.Field(() => StampScalarWhereInput)
  where!: StampScalarWhereInput;

  @NestJsGraphQL.Field(() => StampUpdateManyMutationInput)
  data!: StampUpdateManyMutationInput;
}
