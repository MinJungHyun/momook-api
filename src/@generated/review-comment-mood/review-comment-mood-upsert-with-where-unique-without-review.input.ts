import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodUpdateWithoutReviewInput } from './review-comment-mood-update-without-review.input';
import { ReviewCommentMoodCreateWithoutReviewInput } from './review-comment-mood-create-without-review.input';

@InputType()
export class ReviewCommentMoodUpsertWithWhereUniqueWithoutReviewInput {

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    where!: ReviewCommentMoodWhereUniqueInput;

    @Field(() => ReviewCommentMoodUpdateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewCommentMoodUpdateWithoutReviewInput)
    update!: ReviewCommentMoodUpdateWithoutReviewInput;

    @Field(() => ReviewCommentMoodCreateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewCommentMoodCreateWithoutReviewInput)
    create!: ReviewCommentMoodCreateWithoutReviewInput;
}
