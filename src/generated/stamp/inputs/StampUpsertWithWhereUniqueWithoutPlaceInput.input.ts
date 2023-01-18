import * as NestJsGraphQL from "@nestjs/graphql";
import { StampCreateWithoutPlaceInput } from "../../stamp/inputs/StampCreateWithoutPlaceInput.input";
import { StampUpdateWithoutPlaceInput } from "../../stamp/inputs/StampUpdateWithoutPlaceInput.input";
import { StampWhereUniqueInput } from "../../stamp/inputs/StampWhereUniqueInput.input";

@NestJsGraphQL.InputType('StampUpsertWithWhereUniqueWithoutPlaceInput', { isAbstract: true })
export class StampUpsertWithWhereUniqueWithoutPlaceInput {
  @NestJsGraphQL.Field(() => StampWhereUniqueInput)
  where!: StampWhereUniqueInput;

  @NestJsGraphQL.Field(() => StampUpdateWithoutPlaceInput)
  update!: StampUpdateWithoutPlaceInput;

  @NestJsGraphQL.Field(() => StampCreateWithoutPlaceInput)
  create!: StampCreateWithoutPlaceInput;
}
