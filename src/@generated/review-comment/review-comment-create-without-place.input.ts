import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateNestedOneWithoutReviewCommentsInput } from '../review/review-create-nested-one-without-review-comments.input';
import { UserCreateNestedOneWithoutReviewCommentsInput } from '../user/user-create-nested-one-without-review-comments.input';
import { ReviewCommentMoodCreateNestedManyWithoutReviewCommentInput } from '../review-comment-mood/review-comment-mood-create-nested-many-without-review-comment.input';

@InputType()
export class ReviewCommentCreateWithoutPlaceInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ReviewCreateNestedOneWithoutReviewCommentsInput, {nullable:true})
    review?: ReviewCreateNestedOneWithoutReviewCommentsInput;

    @Field(() => UserCreateNestedOneWithoutReviewCommentsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutReviewCommentsInput;

    @Field(() => ReviewCommentMoodCreateNestedManyWithoutReviewCommentInput, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodCreateNestedManyWithoutReviewCommentInput;
}
