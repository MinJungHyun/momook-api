import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentCreateWithoutReviewCommentMoodsInput } from './review-comment-create-without-review-comment-moods.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateOrConnectWithoutReviewCommentMoodsInput } from './review-comment-create-or-connect-without-review-comment-moods.input';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';

@InputType()
export class ReviewCommentCreateNestedOneWithoutReviewCommentMoodsInput {

    @Field(() => ReviewCommentCreateWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => ReviewCommentCreateWithoutReviewCommentMoodsInput)
    create?: ReviewCommentCreateWithoutReviewCommentMoodsInput;

    @Field(() => ReviewCommentCreateOrConnectWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => ReviewCommentCreateOrConnectWithoutReviewCommentMoodsInput)
    connectOrCreate?: ReviewCommentCreateOrConnectWithoutReviewCommentMoodsInput;

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:true})
    @Type(() => ReviewCommentWhereUniqueInput)
    connect?: ReviewCommentWhereUniqueInput;
}
