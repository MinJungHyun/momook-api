import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlaceMoodUncheckedCreateNestedManyWithoutUserInput } from '../place-mood/place-mood-unchecked-create-nested-many-without-user.input';
import { ReviewUncheckedCreateNestedManyWithoutUserInput } from '../review/review-unchecked-create-nested-many-without-user.input';
import { ReviewCommentUncheckedCreateNestedManyWithoutUserInput } from '../review-comment/review-comment-unchecked-create-nested-many-without-user.input';
import { ReviewCommentMoodUncheckedCreateNestedManyWithoutUserInput } from '../review-comment-mood/review-comment-mood-unchecked-create-nested-many-without-user.input';
import { ReviewMoodUncheckedCreateNestedManyWithoutUserInput } from '../review-mood/review-mood-unchecked-create-nested-many-without-user.input';
import { StampUncheckedCreateNestedManyWithoutUserInput } from '../stamp/stamp-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => PlaceMoodUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    placeMoods?: PlaceMoodUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviewComments?: ReviewCommentUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCommentMoodUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewMoodUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviewMoods?: ReviewMoodUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => StampUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    stamps?: StampUncheckedCreateNestedManyWithoutUserInput;
}
