import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewCommentsInput } from './user-update-without-review-comments.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewCommentsInput } from './user-create-without-review-comments.input';

@InputType()
export class UserUpsertWithoutReviewCommentsInput {

    @Field(() => UserUpdateWithoutReviewCommentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewCommentsInput)
    update!: UserUpdateWithoutReviewCommentsInput;

    @Field(() => UserCreateWithoutReviewCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewCommentsInput)
    create!: UserCreateWithoutReviewCommentsInput;
}
