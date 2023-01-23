import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutStampsInput } from './user-update-without-stamps.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutStampsInput } from './user-create-without-stamps.input';

@InputType()
export class UserUpsertWithoutStampsInput {

    @Field(() => UserUpdateWithoutStampsInput, {nullable:false})
    @Type(() => UserUpdateWithoutStampsInput)
    update!: UserUpdateWithoutStampsInput;

    @Field(() => UserCreateWithoutStampsInput, {nullable:false})
    @Type(() => UserCreateWithoutStampsInput)
    create!: UserCreateWithoutStampsInput;
}
