import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceMoodUpdateWithoutPlaceInput } from './place-mood-update-without-place.input';

@InputType()
export class PlaceMoodUpdateWithWhereUniqueWithoutPlaceInput {

    @Field(() => PlaceMoodWhereUniqueInput, {nullable:false})
    @Type(() => PlaceMoodWhereUniqueInput)
    where!: PlaceMoodWhereUniqueInput;

    @Field(() => PlaceMoodUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => PlaceMoodUpdateWithoutPlaceInput)
    data!: PlaceMoodUpdateWithoutPlaceInput;
}
