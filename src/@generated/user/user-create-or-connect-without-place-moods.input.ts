import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPlaceMoodsInput } from './user-create-without-place-moods.input';

@InputType()
export class UserCreateOrConnectWithoutPlaceMoodsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPlaceMoodsInput, {nullable:false})
    @Type(() => UserCreateWithoutPlaceMoodsInput)
    create!: UserCreateWithoutPlaceMoodsInput;
}
