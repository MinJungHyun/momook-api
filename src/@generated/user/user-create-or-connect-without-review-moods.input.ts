import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewMoodsInput } from './user-create-without-review-moods.input';

@InputType()
export class UserCreateOrConnectWithoutReviewMoodsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutReviewMoodsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewMoodsInput)
    create!: UserCreateWithoutReviewMoodsInput;
}
