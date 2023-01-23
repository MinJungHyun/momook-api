import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewUpdateWithoutReviewCommentsInput } from './review-update-without-review-comments.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutReviewCommentsInput } from './review-create-without-review-comments.input';

@InputType()
export class ReviewUpsertWithoutReviewCommentsInput {

    @Field(() => ReviewUpdateWithoutReviewCommentsInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutReviewCommentsInput)
    update!: ReviewUpdateWithoutReviewCommentsInput;

    @Field(() => ReviewCreateWithoutReviewCommentsInput, {nullable:false})
    @Type(() => ReviewCreateWithoutReviewCommentsInput)
    create!: ReviewCreateWithoutReviewCommentsInput;
}
