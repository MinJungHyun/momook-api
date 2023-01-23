import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutReviewMoodsInput } from '../place/place-create-nested-one-without-review-moods.input';
import { ReviewCreateNestedOneWithoutReviewMoodsInput } from '../review/review-create-nested-one-without-review-moods.input';

@InputType()
export class ReviewMoodCreateWithoutUserInput {

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlaceCreateNestedOneWithoutReviewMoodsInput, {nullable:true})
    place?: PlaceCreateNestedOneWithoutReviewMoodsInput;

    @Field(() => ReviewCreateNestedOneWithoutReviewMoodsInput, {nullable:true})
    review?: ReviewCreateNestedOneWithoutReviewMoodsInput;
}
