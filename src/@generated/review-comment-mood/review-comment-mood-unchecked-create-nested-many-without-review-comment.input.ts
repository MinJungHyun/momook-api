import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateWithoutReviewCommentInput } from './review-comment-mood-create-without-review-comment.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateOrConnectWithoutReviewCommentInput } from './review-comment-mood-create-or-connect-without-review-comment.input';
import { ReviewCommentMoodCreateManyReviewCommentInputEnvelope } from './review-comment-mood-create-many-review-comment-input-envelope.input';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';

@InputType()
export class ReviewCommentMoodUncheckedCreateNestedManyWithoutReviewCommentInput {

    @Field(() => [ReviewCommentMoodCreateWithoutReviewCommentInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateWithoutReviewCommentInput)
    create?: Array<ReviewCommentMoodCreateWithoutReviewCommentInput>;

    @Field(() => [ReviewCommentMoodCreateOrConnectWithoutReviewCommentInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateOrConnectWithoutReviewCommentInput)
    connectOrCreate?: Array<ReviewCommentMoodCreateOrConnectWithoutReviewCommentInput>;

    @Field(() => ReviewCommentMoodCreateManyReviewCommentInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentMoodCreateManyReviewCommentInputEnvelope)
    createMany?: ReviewCommentMoodCreateManyReviewCommentInputEnvelope;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    connect?: Array<ReviewCommentMoodWhereUniqueInput>;
}
