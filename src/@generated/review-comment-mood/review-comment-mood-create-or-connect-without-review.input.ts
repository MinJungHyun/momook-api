import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateWithoutReviewInput } from './review-comment-mood-create-without-review.input';

@InputType()
export class ReviewCommentMoodCreateOrConnectWithoutReviewInput {

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    where!: ReviewCommentMoodWhereUniqueInput;

    @Field(() => ReviewCommentMoodCreateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewCommentMoodCreateWithoutReviewInput)
    create!: ReviewCommentMoodCreateWithoutReviewInput;
}
