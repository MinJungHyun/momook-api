import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReviewsInput } from '../user/user-create-nested-one-without-reviews.input';
import { ReviewCommentCreateNestedManyWithoutReviewInput } from '../review-comment/review-comment-create-nested-many-without-review.input';
import { ReviewMoodCreateNestedManyWithoutReviewInput } from '../review-mood/review-mood-create-nested-many-without-review.input';
import { ReviewCommentMoodCreateNestedManyWithoutReviewInput } from '../review-comment-mood/review-comment-mood-create-nested-many-without-review.input';

@InputType()
export class ReviewCreateWithoutPlaceInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Float, {nullable:false})
    point!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => UserCreateNestedOneWithoutReviewsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutReviewsInput;

    @Field(() => ReviewCommentCreateNestedManyWithoutReviewInput, {nullable:true})
    reviewComments?: ReviewCommentCreateNestedManyWithoutReviewInput;

    @Field(() => ReviewMoodCreateNestedManyWithoutReviewInput, {nullable:true})
    reviewMoods?: ReviewMoodCreateNestedManyWithoutReviewInput;

    @Field(() => ReviewCommentMoodCreateNestedManyWithoutReviewInput, {nullable:true})
    ReviewCommentMood?: ReviewCommentMoodCreateNestedManyWithoutReviewInput;
}
