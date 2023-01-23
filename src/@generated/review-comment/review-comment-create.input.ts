import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutReviewCommentsInput } from '../place/place-create-nested-one-without-review-comments.input';
import { ReviewCreateNestedOneWithoutReviewCommentsInput } from '../review/review-create-nested-one-without-review-comments.input';
import { UserCreateNestedOneWithoutReviewCommentsInput } from '../user/user-create-nested-one-without-review-comments.input';
import { ReviewCommentMoodCreateNestedManyWithoutReviewCommentInput } from '../review-comment-mood/review-comment-mood-create-nested-many-without-review-comment.input';

@InputType()
export class ReviewCommentCreateInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlaceCreateNestedOneWithoutReviewCommentsInput, {nullable:true})
    place?: PlaceCreateNestedOneWithoutReviewCommentsInput;

    @Field(() => ReviewCreateNestedOneWithoutReviewCommentsInput, {nullable:true})
    review?: ReviewCreateNestedOneWithoutReviewCommentsInput;

    @Field(() => UserCreateNestedOneWithoutReviewCommentsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutReviewCommentsInput;

    @Field(() => ReviewCommentMoodCreateNestedManyWithoutReviewCommentInput, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodCreateNestedManyWithoutReviewCommentInput;
}
