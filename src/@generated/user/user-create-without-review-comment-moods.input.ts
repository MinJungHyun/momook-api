import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodCreateNestedManyWithoutUserInput } from '../place-mood/place-mood-create-nested-many-without-user.input';
import { ReviewCreateNestedManyWithoutUserInput } from '../review/review-create-nested-many-without-user.input';
import { ReviewCommentCreateNestedManyWithoutUserInput } from '../review-comment/review-comment-create-nested-many-without-user.input';
import { ReviewMoodCreateNestedManyWithoutUserInput } from '../review-mood/review-mood-create-nested-many-without-user.input';
import { StampCreateNestedManyWithoutUserInput } from '../stamp/stamp-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutReviewCommentMoodsInput {

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

    @Field(() => ReviewCommentCreateNestedManyWithoutUserInput, {nullable:true})
    reviewComments?: ReviewCommentCreateNestedManyWithoutUserInput;

    @Field(() => ReviewMoodCreateNestedManyWithoutUserInput, {nullable:true})
    reviewMoods?: ReviewMoodCreateNestedManyWithoutUserInput;

    @Field(() => StampCreateNestedManyWithoutUserInput, {nullable:true})
    stamps?: StampCreateNestedManyWithoutUserInput;
}
