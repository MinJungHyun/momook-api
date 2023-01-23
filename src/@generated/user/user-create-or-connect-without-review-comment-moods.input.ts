import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewCommentMoodsInput } from './user-create-without-review-comment-moods.input';

@InputType()
export class UserCreateOrConnectWithoutReviewCommentMoodsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutReviewCommentMoodsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewCommentMoodsInput)
    create!: UserCreateWithoutReviewCommentMoodsInput;
}
