import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPlaceMoodsInput } from './user-create-without-place-moods.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPlaceMoodsInput } from './user-create-or-connect-without-place-moods.input';
import { UserUpsertWithoutPlaceMoodsInput } from './user-upsert-without-place-moods.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPlaceMoodsInput } from './user-update-without-place-moods.input';

@InputType()
export class UserUpdateOneWithoutPlaceMoodsNestedInput {

    @Field(() => UserCreateWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => UserCreateWithoutPlaceMoodsInput)
    create?: UserCreateWithoutPlaceMoodsInput;

    @Field(() => UserCreateOrConnectWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPlaceMoodsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPlaceMoodsInput;

    @Field(() => UserUpsertWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => UserUpsertWithoutPlaceMoodsInput)
    upsert?: UserUpsertWithoutPlaceMoodsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => UserUpdateWithoutPlaceMoodsInput)
    update?: UserUpdateWithoutPlaceMoodsInput;
}
