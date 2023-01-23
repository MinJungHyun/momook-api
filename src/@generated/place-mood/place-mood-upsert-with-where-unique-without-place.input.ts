import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceMoodUpdateWithoutPlaceInput } from './place-mood-update-without-place.input';
import { PlaceMoodCreateWithoutPlaceInput } from './place-mood-create-without-place.input';

@InputType()
export class PlaceMoodUpsertWithWhereUniqueWithoutPlaceInput {

    @Field(() => PlaceMoodWhereUniqueInput, {nullable:false})
    @Type(() => PlaceMoodWhereUniqueInput)
    where!: PlaceMoodWhereUniqueInput;

    @Field(() => PlaceMoodUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => PlaceMoodUpdateWithoutPlaceInput)
    update!: PlaceMoodUpdateWithoutPlaceInput;

    @Field(() => PlaceMoodCreateWithoutPlaceInput, {nullable:false})
    @Type(() => PlaceMoodCreateWithoutPlaceInput)
    create!: PlaceMoodCreateWithoutPlaceInput;
}
