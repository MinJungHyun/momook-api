import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceUpdateWithoutReviewsInput } from './place-update-without-reviews.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutReviewsInput } from './place-create-without-reviews.input';

@InputType()
export class PlaceUpsertWithoutReviewsInput {

    @Field(() => PlaceUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutReviewsInput)
    update!: PlaceUpdateWithoutReviewsInput;

    @Field(() => PlaceCreateWithoutReviewsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutReviewsInput)
    create!: PlaceCreateWithoutReviewsInput;
}
