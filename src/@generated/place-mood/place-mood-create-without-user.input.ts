import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutPlaceMoodsInput } from '../place/place-create-nested-one-without-place-moods.input';

@InputType()
export class PlaceMoodCreateWithoutUserInput {

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlaceCreateNestedOneWithoutPlaceMoodsInput, {nullable:true})
    place?: PlaceCreateNestedOneWithoutPlaceMoodsInput;
}
