import * as NestJsGraphQL from "@nestjs/graphql";
import { StampCreateManyPlaceInputEnvelope } from "../../stamp/inputs/StampCreateManyPlaceInputEnvelope.input";
import { StampCreateOrConnectWithoutPlaceInput } from "../../stamp/inputs/StampCreateOrConnectWithoutPlaceInput.input";
import { StampCreateWithoutPlaceInput } from "../../stamp/inputs/StampCreateWithoutPlaceInput.input";
import { StampWhereUniqueInput } from "../../stamp/inputs/StampWhereUniqueInput.input";

@NestJsGraphQL.InputType('StampCreateNestedManyWithoutPlaceInput', { isAbstract: true })
export class StampCreateNestedManyWithoutPlaceInput {
  @NestJsGraphQL.Field(() => [StampCreateWithoutPlaceInput], { nullable: true })
  create?: StampCreateWithoutPlaceInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampCreateOrConnectWithoutPlaceInput], { nullable: true })
  connectOrCreate?: StampCreateOrConnectWithoutPlaceInput[] | undefined;

  @NestJsGraphQL.Field(() => StampCreateManyPlaceInputEnvelope, { nullable: true })
  createMany?: StampCreateManyPlaceInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [StampWhereUniqueInput], { nullable: true })
  connect?: StampWhereUniqueInput[] | undefined;
}
