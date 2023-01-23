import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutReviewCommentsInput } from '../place/place-create-nested-one-without-review-comments.input';
import { ReviewCreateNestedOneWithoutReviewCommentsInput } from '../review/review-create-nested-one-without-review-comments.input';
import { UserCreateNestedOneWithoutReviewCommentsInput } from '../user/user-create-nested-one-without-review-comments.input';

@InputType()
export class ReviewCommentCreateWithoutReviewCommentMoodsInput {

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
}
