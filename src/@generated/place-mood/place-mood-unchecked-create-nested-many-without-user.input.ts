import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodCreateWithoutUserInput } from './place-mood-create-without-user.input';
import { Type } from 'class-transformer';
import { PlaceMoodCreateOrConnectWithoutUserInput } from './place-mood-create-or-connect-without-user.input';
import { PlaceMoodCreateManyUserInputEnvelope } from './place-mood-create-many-user-input-envelope.input';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';

@InputType()
export class PlaceMoodUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PlaceMoodCreateWithoutUserInput], {nullable:true})
    @Type(() => PlaceMoodCreateWithoutUserInput)
    create?: Array<PlaceMoodCreateWithoutUserInput>;

    @Field(() => [PlaceMoodCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PlaceMoodCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PlaceMoodCreateOrConnectWithoutUserInput>;

    @Field(() => PlaceMoodCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PlaceMoodCreateManyUserInputEnvelope)
    createMany?: PlaceMoodCreateManyUserInputEnvelope;

    @Field(() => [PlaceMoodWhereUniqueInput], {nullable:true})
    @Type(() => PlaceMoodWhereUniqueInput)
    connect?: Array<PlaceMoodWhereUniqueInput>;
}
