import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCreateNestedOneWithoutReviewMoodsInput } from '../review/review-create-nested-one-without-review-moods.input';
import { UserCreateNestedOneWithoutReviewMoodsInput } from '../user/user-create-nested-one-without-review-moods.input';

@InputType()
export class ReviewMoodCreateWithoutPlaceInput {

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ReviewCreateNestedOneWithoutReviewMoodsInput, {nullable:true})
    review?: ReviewCreateNestedOneWithoutReviewMoodsInput;

    @Field(() => UserCreateNestedOneWithoutReviewMoodsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutReviewMoodsInput;
}
