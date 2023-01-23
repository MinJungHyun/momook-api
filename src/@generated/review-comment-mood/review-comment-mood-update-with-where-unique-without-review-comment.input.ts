import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodUpdateWithoutReviewCommentInput } from './review-comment-mood-update-without-review-comment.input';

@InputType()
export class ReviewCommentMoodUpdateWithWhereUniqueWithoutReviewCommentInput {

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    where!: ReviewCommentMoodWhereUniqueInput;

    @Field(() => ReviewCommentMoodUpdateWithoutReviewCommentInput, {nullable:false})
    @Type(() => ReviewCommentMoodUpdateWithoutReviewCommentInput)
    data!: ReviewCommentMoodUpdateWithoutReviewCommentInput;
}
