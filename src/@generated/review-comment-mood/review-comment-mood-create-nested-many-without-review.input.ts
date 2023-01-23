import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateWithoutReviewInput } from './review-comment-mood-create-without-review.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateOrConnectWithoutReviewInput } from './review-comment-mood-create-or-connect-without-review.input';
import { ReviewCommentMoodCreateManyReviewInputEnvelope } from './review-comment-mood-create-many-review-input-envelope.input';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';

@InputType()
export class ReviewCommentMoodCreateNestedManyWithoutReviewInput {

    @Field(() => [ReviewCommentMoodCreateWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateWithoutReviewInput)
    create?: Array<ReviewCommentMoodCreateWithoutReviewInput>;

    @Field(() => [ReviewCommentMoodCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<ReviewCommentMoodCreateOrConnectWithoutReviewInput>;

    @Field(() => ReviewCommentMoodCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentMoodCreateManyReviewInputEnvelope)
    createMany?: ReviewCommentMoodCreateManyReviewInputEnvelope;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    connect?: Array<ReviewCommentMoodWhereUniqueInput>;
}
