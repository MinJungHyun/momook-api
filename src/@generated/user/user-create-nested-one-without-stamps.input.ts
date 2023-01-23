import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStampsInput } from './user-create-without-stamps.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutStampsInput } from './user-create-or-connect-without-stamps.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutStampsInput {

    @Field(() => UserCreateWithoutStampsInput, {nullable:true})
    @Type(() => UserCreateWithoutStampsInput)
    create?: UserCreateWithoutStampsInput;

    @Field(() => UserCreateOrConnectWithoutStampsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutStampsInput)
    connectOrCreate?: UserCreateOrConnectWithoutStampsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
