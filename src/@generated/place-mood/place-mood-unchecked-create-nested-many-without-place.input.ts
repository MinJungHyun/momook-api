import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodCreateWithoutPlaceInput } from './place-mood-create-without-place.input';
import { Type } from 'class-transformer';
import { PlaceMoodCreateOrConnectWithoutPlaceInput } from './place-mood-create-or-connect-without-place.input';
import { PlaceMoodCreateManyPlaceInputEnvelope } from './place-mood-create-many-place-input-envelope.input';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';

@InputType()
export class PlaceMoodUncheckedCreateNestedManyWithoutPlaceInput {

    @Field(() => [PlaceMoodCreateWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceMoodCreateWithoutPlaceInput)
    create?: Array<PlaceMoodCreateWithoutPlaceInput>;

    @Field(() => [PlaceMoodCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceMoodCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<PlaceMoodCreateOrConnectWithoutPlaceInput>;

    @Field(() => PlaceMoodCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => PlaceMoodCreateManyPlaceInputEnvelope)
    createMany?: PlaceMoodCreateManyPlaceInputEnvelope;

    @Field(() => [PlaceMoodWhereUniqueInput], {nullable:true})
    @Type(() => PlaceMoodWhereUniqueInput)
    connect?: Array<PlaceMoodWhereUniqueInput>;
}
