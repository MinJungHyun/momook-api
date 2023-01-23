import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateWithoutReviewInput } from './review-comment-create-without-review.input';

@InputType()
export class ReviewCommentCreateOrConnectWithoutReviewInput {

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentWhereUniqueInput)
    where!: ReviewCommentWhereUniqueInput;

    @Field(() => ReviewCommentCreateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewCommentCreateWithoutReviewInput)
    create!: ReviewCommentCreateWithoutReviewInput;
}
