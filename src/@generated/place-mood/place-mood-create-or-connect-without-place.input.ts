import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceMoodCreateWithoutPlaceInput } from './place-mood-create-without-place.input';

@InputType()
export class PlaceMoodCreateOrConnectWithoutPlaceInput {

    @Field(() => PlaceMoodWhereUniqueInput, {nullable:false})
    @Type(() => PlaceMoodWhereUniqueInput)
    where!: PlaceMoodWhereUniqueInput;

    @Field(() => PlaceMoodCreateWithoutPlaceInput, {nullable:false})
    @Type(() => PlaceMoodCreateWithoutPlaceInput)
    create!: PlaceMoodCreateWithoutPlaceInput;
}
