import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceUpdateWithoutPlaceMoodsInput } from './place-update-without-place-moods.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutPlaceMoodsInput } from './place-create-without-place-moods.input';

@InputType()
export class PlaceUpsertWithoutPlaceMoodsInput {

    @Field(() => PlaceUpdateWithoutPlaceMoodsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutPlaceMoodsInput)
    update!: PlaceUpdateWithoutPlaceMoodsInput;

    @Field(() => PlaceCreateWithoutPlaceMoodsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutPlaceMoodsInput)
    create!: PlaceCreateWithoutPlaceMoodsInput;
}
