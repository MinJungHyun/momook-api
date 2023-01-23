import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateWithoutReviewCommentMoodsInput } from './review-comment-create-without-review-comment-moods.input';

@InputType()
export class ReviewCommentCreateOrConnectWithoutReviewCommentMoodsInput {

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentWhereUniqueInput)
    where!: ReviewCommentWhereUniqueInput;

    @Field(() => ReviewCommentCreateWithoutReviewCommentMoodsInput, {nullable:false})
    @Type(() => ReviewCommentCreateWithoutReviewCommentMoodsInput)
    create!: ReviewCommentCreateWithoutReviewCommentMoodsInput;
}
