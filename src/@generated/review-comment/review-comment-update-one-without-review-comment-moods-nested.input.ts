import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentCreateWithoutReviewCommentMoodsInput } from './review-comment-create-without-review-comment-moods.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateOrConnectWithoutReviewCommentMoodsInput } from './review-comment-create-or-connect-without-review-comment-moods.input';
import { ReviewCommentUpsertWithoutReviewCommentMoodsInput } from './review-comment-upsert-without-review-comment-moods.input';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { ReviewCommentUpdateWithoutReviewCommentMoodsInput } from './review-comment-update-without-review-comment-moods.input';

@InputType()
export class ReviewCommentUpdateOneWithoutReviewCommentMoodsNestedInput {

    @Field(() => ReviewCommentCreateWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => ReviewCommentCreateWithoutReviewCommentMoodsInput)
    create?: ReviewCommentCreateWithoutReviewCommentMoodsInput;

    @Field(() => ReviewCommentCreateOrConnectWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => ReviewCommentCreateOrConnectWithoutReviewCommentMoodsInput)
    connectOrCreate?: ReviewCommentCreateOrConnectWithoutReviewCommentMoodsInput;

    @Field(() => ReviewCommentUpsertWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => ReviewCommentUpsertWithoutReviewCommentMoodsInput)
    upsert?: ReviewCommentUpsertWithoutReviewCommentMoodsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:true})
    @Type(() => ReviewCommentWhereUniqueInput)
    connect?: ReviewCommentWhereUniqueInput;

    @Field(() => ReviewCommentUpdateWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => ReviewCommentUpdateWithoutReviewCommentMoodsInput)
    update?: ReviewCommentUpdateWithoutReviewCommentMoodsInput;
}
