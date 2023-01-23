import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewCommentMoodsInput } from './user-update-without-review-comment-moods.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewCommentMoodsInput } from './user-create-without-review-comment-moods.input';

@InputType()
export class UserUpsertWithoutReviewCommentMoodsInput {

    @Field(() => UserUpdateWithoutReviewCommentMoodsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewCommentMoodsInput)
    update!: UserUpdateWithoutReviewCommentMoodsInput;

    @Field(() => UserCreateWithoutReviewCommentMoodsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewCommentMoodsInput)
    create!: UserCreateWithoutReviewCommentMoodsInput;
}
