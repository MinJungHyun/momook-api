import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStampsInput } from './user-create-without-stamps.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutStampsInput } from './user-create-or-connect-without-stamps.input';
import { UserUpsertWithoutStampsInput } from './user-upsert-without-stamps.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutStampsInput } from './user-update-without-stamps.input';

@InputType()
export class UserUpdateOneWithoutStampsNestedInput {

    @Field(() => UserCreateWithoutStampsInput, {nullable:true})
    @Type(() => UserCreateWithoutStampsInput)
    create?: UserCreateWithoutStampsInput;

    @Field(() => UserCreateOrConnectWithoutStampsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutStampsInput)
    connectOrCreate?: UserCreateOrConnectWithoutStampsInput;

    @Field(() => UserUpsertWithoutStampsInput, {nullable:true})
    @Type(() => UserUpsertWithoutStampsInput)
    upsert?: UserUpsertWithoutStampsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutStampsInput, {nullable:true})
    @Type(() => UserUpdateWithoutStampsInput)
    update?: UserUpdateWithoutStampsInput;
}
