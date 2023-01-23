import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewCommentMoodsInput } from './user-create-without-review-comment-moods.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewCommentMoodsInput } from './user-create-or-connect-without-review-comment-moods.input';
import { UserUpsertWithoutReviewCommentMoodsInput } from './user-upsert-without-review-comment-moods.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutReviewCommentMoodsInput } from './user-update-without-review-comment-moods.input';

@InputType()
export class UserUpdateOneWithoutReviewCommentMoodsNestedInput {

    @Field(() => UserCreateWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewCommentMoodsInput)
    create?: UserCreateWithoutReviewCommentMoodsInput;

    @Field(() => UserCreateOrConnectWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewCommentMoodsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewCommentMoodsInput;

    @Field(() => UserUpsertWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReviewCommentMoodsInput)
    upsert?: UserUpsertWithoutReviewCommentMoodsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => UserUpdateWithoutReviewCommentMoodsInput)
    update?: UserUpdateWithoutReviewCommentMoodsInput;
}
