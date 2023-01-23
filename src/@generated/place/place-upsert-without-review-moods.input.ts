import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceUpdateWithoutReviewMoodsInput } from './place-update-without-review-moods.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutReviewMoodsInput } from './place-create-without-review-moods.input';

@InputType()
export class PlaceUpsertWithoutReviewMoodsInput {

    @Field(() => PlaceUpdateWithoutReviewMoodsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutReviewMoodsInput)
    update!: PlaceUpdateWithoutReviewMoodsInput;

    @Field(() => PlaceCreateWithoutReviewMoodsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutReviewMoodsInput)
    create!: PlaceCreateWithoutReviewMoodsInput;
}
