import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewMoodsInput } from './user-create-without-review-moods.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewMoodsInput } from './user-create-or-connect-without-review-moods.input';
import { UserUpsertWithoutReviewMoodsInput } from './user-upsert-without-review-moods.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutReviewMoodsInput } from './user-update-without-review-moods.input';

@InputType()
export class UserUpdateOneWithoutReviewMoodsNestedInput {

    @Field(() => UserCreateWithoutReviewMoodsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewMoodsInput)
    create?: UserCreateWithoutReviewMoodsInput;

    @Field(() => UserCreateOrConnectWithoutReviewMoodsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewMoodsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewMoodsInput;

    @Field(() => UserUpsertWithoutReviewMoodsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReviewMoodsInput)
    upsert?: UserUpsertWithoutReviewMoodsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutReviewMoodsInput, {nullable:true})
    @Type(() => UserUpdateWithoutReviewMoodsInput)
    update?: UserUpdateWithoutReviewMoodsInput;
}
