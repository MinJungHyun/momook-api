import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodCreateWithoutPlaceInput } from './place-mood-create-without-place.input';
import { Type } from 'class-transformer';
import { PlaceMoodCreateOrConnectWithoutPlaceInput } from './place-mood-create-or-connect-without-place.input';
import { PlaceMoodUpsertWithWhereUniqueWithoutPlaceInput } from './place-mood-upsert-with-where-unique-without-place.input';
import { PlaceMoodCreateManyPlaceInputEnvelope } from './place-mood-create-many-place-input-envelope.input';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';
import { PlaceMoodUpdateWithWhereUniqueWithoutPlaceInput } from './place-mood-update-with-where-unique-without-place.input';
import { PlaceMoodUpdateManyWithWhereWithoutPlaceInput } from './place-mood-update-many-with-where-without-place.input';
import { PlaceMoodScalarWhereInput } from './place-mood-scalar-where.input';

@InputType()
export class PlaceMoodUpdateManyWithoutPlaceNestedInput {

    @Field(() => [PlaceMoodCreateWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceMoodCreateWithoutPlaceInput)
    create?: Array<PlaceMoodCreateWithoutPlaceInput>;

    @Field(() => [PlaceMoodCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceMoodCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<PlaceMoodCreateOrConnectWithoutPlaceInput>;

    @Field(() => [PlaceMoodUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceMoodUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<PlaceMoodUpsertWithWhereUniqueWithoutPlaceInput>;

    @Field(() => PlaceMoodCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => PlaceMoodCreateManyPlaceInputEnvelope)
    createMany?: PlaceMoodCreateManyPlaceInputEnvelope;

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

    @Field(() => [PlaceMoodUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceMoodUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<PlaceMoodUpdateWithWhereUniqueWithoutPlaceInput>;

    @Field(() => [PlaceMoodUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceMoodUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<PlaceMoodUpdateManyWithWhereWithoutPlaceInput>;

    @Field(() => [PlaceMoodScalarWhereInput], {nullable:true})
    @Type(() => PlaceMoodScalarWhereInput)
    deleteMany?: Array<PlaceMoodScalarWhereInput>;
}
