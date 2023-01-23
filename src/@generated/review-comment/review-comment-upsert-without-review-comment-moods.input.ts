import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentUpdateWithoutReviewCommentMoodsInput } from './review-comment-update-without-review-comment-moods.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateWithoutReviewCommentMoodsInput } from './review-comment-create-without-review-comment-moods.input';

@InputType()
export class ReviewCommentUpsertWithoutReviewCommentMoodsInput {

    @Field(() => ReviewCommentUpdateWithoutReviewCommentMoodsInput, {nullable:false})
    @Type(() => ReviewCommentUpdateWithoutReviewCommentMoodsInput)
    update!: ReviewCommentUpdateWithoutReviewCommentMoodsInput;

    @Field(() => ReviewCommentCreateWithoutReviewCommentMoodsInput, {nullable:false})
    @Type(() => ReviewCommentCreateWithoutReviewCommentMoodsInput)
    create!: ReviewCommentCreateWithoutReviewCommentMoodsInput;
}
