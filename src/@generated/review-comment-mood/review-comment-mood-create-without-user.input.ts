import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutReviewCommentMoodsInput } from '../place/place-create-nested-one-without-review-comment-moods.input';
import { ReviewCommentCreateNestedOneWithoutReviewCommentMoodsInput } from '../review-comment/review-comment-create-nested-one-without-review-comment-moods.input';
import { ReviewCreateNestedOneWithoutReviewCommentMoodInput } from '../review/review-create-nested-one-without-review-comment-mood.input';

@InputType()
export class ReviewCommentMoodCreateWithoutUserInput {

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlaceCreateNestedOneWithoutReviewCommentMoodsInput, {nullable:true})
    place?: PlaceCreateNestedOneWithoutReviewCommentMoodsInput;

    @Field(() => ReviewCommentCreateNestedOneWithoutReviewCommentMoodsInput, {nullable:true})
    reviewComment?: ReviewCommentCreateNestedOneWithoutReviewCommentMoodsInput;

    @Field(() => ReviewCreateNestedOneWithoutReviewCommentMoodInput, {nullable:true})
    review?: ReviewCreateNestedOneWithoutReviewCommentMoodInput;
}
