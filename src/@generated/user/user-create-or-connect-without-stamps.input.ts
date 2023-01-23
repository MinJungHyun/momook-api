import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutStampsInput } from './user-create-without-stamps.input';

@InputType()
export class UserCreateOrConnectWithoutStampsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutStampsInput, {nullable:false})
    @Type(() => UserCreateWithoutStampsInput)
    create!: UserCreateWithoutStampsInput;
}
