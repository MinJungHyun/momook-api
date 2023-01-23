import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodUpdateWithoutReviewInput } from './review-comment-mood-update-without-review.input';

@InputType()
export class ReviewCommentMoodUpdateWithWhereUniqueWithoutReviewInput {

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    where!: ReviewCommentMoodWhereUniqueInput;

    @Field(() => ReviewCommentMoodUpdateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewCommentMoodUpdateWithoutReviewInput)
    data!: ReviewCommentMoodUpdateWithoutReviewInput;
}
