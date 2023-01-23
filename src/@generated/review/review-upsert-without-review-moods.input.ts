import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewUpdateWithoutReviewMoodsInput } from './review-update-without-review-moods.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutReviewMoodsInput } from './review-create-without-review-moods.input';

@InputType()
export class ReviewUpsertWithoutReviewMoodsInput {

    @Field(() => ReviewUpdateWithoutReviewMoodsInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutReviewMoodsInput)
    update!: ReviewUpdateWithoutReviewMoodsInput;

    @Field(() => ReviewCreateWithoutReviewMoodsInput, {nullable:false})
    @Type(() => ReviewCreateWithoutReviewMoodsInput)
    create!: ReviewCreateWithoutReviewMoodsInput;
}
