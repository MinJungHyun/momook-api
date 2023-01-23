import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodCreateWithoutUserInput } from './place-mood-create-without-user.input';
import { Type } from 'class-transformer';
import { PlaceMoodCreateOrConnectWithoutUserInput } from './place-mood-create-or-connect-without-user.input';
import { PlaceMoodUpsertWithWhereUniqueWithoutUserInput } from './place-mood-upsert-with-where-unique-without-user.input';
import { PlaceMoodCreateManyUserInputEnvelope } from './place-mood-create-many-user-input-envelope.input';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';
import { PlaceMoodUpdateWithWhereUniqueWithoutUserInput } from './place-mood-update-with-where-unique-without-user.input';
import { PlaceMoodUpdateManyWithWhereWithoutUserInput } from './place-mood-update-many-with-where-without-user.input';
import { PlaceMoodScalarWhereInput } from './place-mood-scalar-where.input';

@InputType()
export class PlaceMoodUpdateManyWithoutUserNestedInput {

    @Field(() => [PlaceMoodCreateWithoutUserInput], {nullable:true})
    @Type(() => PlaceMoodCreateWithoutUserInput)
    create?: Array<PlaceMoodCreateWithoutUserInput>;

    @Field(() => [PlaceMoodCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PlaceMoodCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PlaceMoodCreateOrConnectWithoutUserInput>;

    @Field(() => [PlaceMoodUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PlaceMoodUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PlaceMoodUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PlaceMoodCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PlaceMoodCreateManyUserInputEnvelope)
    createMany?: PlaceMoodCreateManyUserInputEnvelope;

    @Field(() => [PlaceMoodWhereUniqueInput], {nullable:true})
    @Type(() => PlaceMoodWhereUniqueInput)
    set?: Array<PlaceMoodWhereUniqueInput>;

    @Field(() => [PlaceMoodWhereUniqueInput], {nullable:true})
    @Type(() => PlaceMoodWhereUniqueInput)
    disconnect?: Array<PlaceMoodWhereUniqueInput>;

    @Field(() => [PlaceMoodWhereUniqueInput], {nullable:true})
    @Type(() => PlaceMoodWhereUniqueInput)
    delete?: Array<PlaceMoodWhereUniqueInput>;

    @Field(() => [PlaceMoodWhereUniqueInput], {nullable:true})
    @Type(() => PlaceMoodWhereUniqueInput)
    connect?: Array<PlaceMoodWhereUniqueInput>;

    @Field(() => [PlaceMoodUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PlaceMoodUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PlaceMoodUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PlaceMoodUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PlaceMoodUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PlaceMoodUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PlaceMoodScalarWhereInput], {nullable:true})
    @Type(() => PlaceMoodScalarWhereInput)
    deleteMany?: Array<PlaceMoodScalarWhereInput>;
}
