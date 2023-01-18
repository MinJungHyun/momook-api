import * as NestJsGraphQL from "@nestjs/graphql";
import { StampCreateWithoutPlaceInput } from "../../stamp/inputs/StampCreateWithoutPlaceInput.input";
import { StampWhereUniqueInput } from "../../stamp/inputs/StampWhereUniqueInput.input";

@NestJsGraphQL.InputType('StampCreateOrConnectWithoutPlaceInput', { isAbstract: true })
export class StampCreateOrConnectWithoutPlaceInput {
  @NestJsGraphQL.Field(() => StampWhereUniqueInput)
  where!: StampWhereUniqueInput;

  @NestJsGraphQL.Field(() => StampCreateWithoutPlaceInput)
  create!: StampCreateWithoutPlaceInput;
}
