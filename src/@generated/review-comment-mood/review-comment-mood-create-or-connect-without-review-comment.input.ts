import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateWithoutReviewCommentInput } from './review-comment-mood-create-without-review-comment.input';

@InputType()
export class ReviewCommentMoodCreateOrConnectWithoutReviewCommentInput {

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    where!: ReviewCommentMoodWhereUniqueInput;

    @Field(() => ReviewCommentMoodCreateWithoutReviewCommentInput, {nullable:false})
    @Type(() => ReviewCommentMoodCreateWithoutReviewCommentInput)
    create!: ReviewCommentMoodCreateWithoutReviewCommentInput;
}
