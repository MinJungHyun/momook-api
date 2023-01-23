import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentCreateWithoutReviewInput } from './review-comment-create-without-review.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateOrConnectWithoutReviewInput } from './review-comment-create-or-connect-without-review.input';
import { ReviewCommentCreateManyReviewInputEnvelope } from './review-comment-create-many-review-input-envelope.input';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';

@InputType()
export class ReviewCommentUncheckedCreateNestedManyWithoutReviewInput {

    @Field(() => [ReviewCommentCreateWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentCreateWithoutReviewInput)
    create?: Array<ReviewCommentCreateWithoutReviewInput>;

    @Field(() => [ReviewCommentCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<ReviewCommentCreateOrConnectWithoutReviewInput>;

    @Field(() => ReviewCommentCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentCreateManyReviewInputEnvelope)
    createMany?: ReviewCommentCreateManyReviewInputEnvelope;

    @Field(() => [ReviewCommentWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentWhereUniqueInput)
    connect?: Array<ReviewCommentWhereUniqueInput>;
}
