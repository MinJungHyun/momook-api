import * as NestJsGraphQL from "@nestjs/graphql";
import { StampCreateManyPlaceInputEnvelope } from "../../stamp/inputs/StampCreateManyPlaceInputEnvelope.input";
import { StampCreateOrConnectWithoutPlaceInput } from "../../stamp/inputs/StampCreateOrConnectWithoutPlaceInput.input";
import { StampCreateWithoutPlaceInput } from "../../stamp/inputs/StampCreateWithoutPlaceInput.input";
import { StampScalarWhereInput } from "../../stamp/inputs/StampScalarWhereInput.input";
import { StampUpdateManyWithWhereWithoutPlaceInput } from "../../stamp/inputs/StampUpdateManyWithWhereWithoutPlaceInput.input";
import { StampUpdateWithWhereUniqueWithoutPlaceInput } from "../../stamp/inputs/StampUpdateWithWhereUniqueWithoutPlaceInput.input";
import { StampUpsertWithWhereUniqueWithoutPlaceInput } from "../../stamp/inputs/StampUpsertWithWhereUniqueWithoutPlaceInput.input";
import { StampWhereUniqueInput } from "../../stamp/inputs/StampWhereUniqueInput.input";

@NestJsGraphQL.InputType('StampUpdateManyWithoutPlaceNestedInput', { isAbstract: true })
export class StampUpdateManyWithoutPlaceNestedInput {
  @NestJsGraphQL.Field(() => [StampCreateWithoutPlaceInput], { nullable: true })
  create?: StampCreateWithoutPlaceInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampCreateOrConnectWithoutPlaceInput], { nullable: true })
  connectOrCreate?: StampCreateOrConnectWithoutPlaceInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampUpsertWithWhereUniqueWithoutPlaceInput], { nullable: true })
  upsert?: StampUpsertWithWhereUniqueWithoutPlaceInput[] | undefined;

  @NestJsGraphQL.Field(() => StampCreateManyPlaceInputEnvelope, { nullable: true })
  createMany?: StampCreateManyPlaceInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [StampWhereUniqueInput], { nullable: true })
  set?: StampWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampWhereUniqueInput], { nullable: true })
  disconnect?: StampWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampWhereUniqueInput], { nullable: true })
  delete?: StampWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampWhereUniqueInput], { nullable: true })
  connect?: StampWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampUpdateWithWhereUniqueWithoutPlaceInput], { nullable: true })
  update?: StampUpdateWithWhereUniqueWithoutPlaceInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampUpdateManyWithWhereWithoutPlaceInput], { nullable: true })
  updateMany?: StampUpdateManyWithWhereWithoutPlaceInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampScalarWhereInput], { nullable: true })
  deleteMany?: StampScalarWhereInput[] | undefined;
}
