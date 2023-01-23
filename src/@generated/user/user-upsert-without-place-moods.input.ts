import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPlaceMoodsInput } from './user-update-without-place-moods.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPlaceMoodsInput } from './user-create-without-place-moods.input';

@InputType()
export class UserUpsertWithoutPlaceMoodsInput {

    @Field(() => UserUpdateWithoutPlaceMoodsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPlaceMoodsInput)
    update!: UserUpdateWithoutPlaceMoodsInput;

    @Field(() => UserCreateWithoutPlaceMoodsInput, {nullable:false})
    @Type(() => UserCreateWithoutPlaceMoodsInput)
    create!: UserCreateWithoutPlaceMoodsInput;
}
