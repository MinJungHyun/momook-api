import * as NestJsGraphQL from "@nestjs/graphql";
import { StampUpdateWithoutPlaceInput } from "../../stamp/inputs/StampUpdateWithoutPlaceInput.input";
import { StampWhereUniqueInput } from "../../stamp/inputs/StampWhereUniqueInput.input";

@NestJsGraphQL.InputType('StampUpdateWithWhereUniqueWithoutPlaceInput', { isAbstract: true })
export class StampUpdateWithWhereUniqueWithoutPlaceInput {
  @NestJsGraphQL.Field(() => StampWhereUniqueInput)
  where!: StampWhereUniqueInput;

  @NestJsGraphQL.Field(() => StampUpdateWithoutPlaceInput)
  data!: StampUpdateWithoutPlaceInput;
}
