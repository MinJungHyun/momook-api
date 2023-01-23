import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewUpdateWithoutReviewCommentMoodInput } from './review-update-without-review-comment-mood.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutReviewCommentMoodInput } from './review-create-without-review-comment-mood.input';

@InputType()
export class ReviewUpsertWithoutReviewCommentMoodInput {

    @Field(() => ReviewUpdateWithoutReviewCommentMoodInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutReviewCommentMoodInput)
    update!: ReviewUpdateWithoutReviewCommentMoodInput;

    @Field(() => ReviewCreateWithoutReviewCommentMoodInput, {nullable:false})
    @Type(() => ReviewCreateWithoutReviewCommentMoodInput)
    create!: ReviewCreateWithoutReviewCommentMoodInput;
}
