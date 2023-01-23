import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewMoodsInput } from './user-create-without-review-moods.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewMoodsInput } from './user-create-or-connect-without-review-moods.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReviewMoodsInput {

    @Field(() => UserCreateWithoutReviewMoodsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewMoodsInput)
    create?: UserCreateWithoutReviewMoodsInput;

    @Field(() => UserCreateOrConnectWithoutReviewMoodsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewMoodsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewMoodsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
