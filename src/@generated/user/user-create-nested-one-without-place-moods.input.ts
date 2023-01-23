import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPlaceMoodsInput } from './user-create-without-place-moods.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPlaceMoodsInput } from './user-create-or-connect-without-place-moods.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPlaceMoodsInput {

    @Field(() => UserCreateWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => UserCreateWithoutPlaceMoodsInput)
    create?: UserCreateWithoutPlaceMoodsInput;

    @Field(() => UserCreateOrConnectWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPlaceMoodsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPlaceMoodsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
