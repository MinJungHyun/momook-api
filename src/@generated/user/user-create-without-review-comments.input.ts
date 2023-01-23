import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodCreateNestedManyWithoutUserInput } from '../place-mood/place-mood-create-nested-many-without-user.input';
import { ReviewCreateNestedManyWithoutUserInput } from '../review/review-create-nested-many-without-user.input';
import { ReviewCommentMoodCreateNestedManyWithoutUserInput } from '../review-comment-mood/review-comment-mood-create-nested-many-without-user.input';
import { ReviewMoodCreateNestedManyWithoutUserInput } from '../review-mood/review-mood-create-nested-many-without-user.input';
import { StampCreateNestedManyWithoutUserInput } from '../stamp/stamp-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutReviewCommentsInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    socialType?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlaceMoodCreateNestedManyWithoutUserInput, {nullable:true})
    placeMoods?: PlaceMoodCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCommentMoodCreateNestedManyWithoutUserInput, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodCreateNestedManyWithoutUserInput;

    @Field(() => ReviewMoodCreateNestedManyWithoutUserInput, {nullable:true})
    reviewMoods?: ReviewMoodCreateNestedManyWithoutUserInput;

    @Field(() => StampCreateNestedManyWithoutUserInput, {nullable:true})
    stamps?: StampCreateNestedManyWithoutUserInput;
}
