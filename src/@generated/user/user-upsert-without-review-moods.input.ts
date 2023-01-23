import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewMoodsInput } from './user-update-without-review-moods.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewMoodsInput } from './user-create-without-review-moods.input';

@InputType()
export class UserUpsertWithoutReviewMoodsInput {

    @Field(() => UserUpdateWithoutReviewMoodsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewMoodsInput)
    update!: UserUpdateWithoutReviewMoodsInput;

    @Field(() => UserCreateWithoutReviewMoodsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewMoodsInput)
    create!: UserCreateWithoutReviewMoodsInput;
}
