import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewCommentMoodsInput } from './user-create-without-review-comment-moods.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewCommentMoodsInput } from './user-create-or-connect-without-review-comment-moods.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReviewCommentMoodsInput {

    @Field(() => UserCreateWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewCommentMoodsInput)
    create?: UserCreateWithoutReviewCommentMoodsInput;

    @Field(() => UserCreateOrConnectWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewCommentMoodsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewCommentMoodsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
