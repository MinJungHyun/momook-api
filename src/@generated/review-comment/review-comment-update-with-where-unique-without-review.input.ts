import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentUpdateWithoutReviewInput } from './review-comment-update-without-review.input';

@InputType()
export class ReviewCommentUpdateWithWhereUniqueWithoutReviewInput {

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentWhereUniqueInput)
    where!: ReviewCommentWhereUniqueInput;

    @Field(() => ReviewCommentUpdateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewCommentUpdateWithoutReviewInput)
    data!: ReviewCommentUpdateWithoutReviewInput;
}
