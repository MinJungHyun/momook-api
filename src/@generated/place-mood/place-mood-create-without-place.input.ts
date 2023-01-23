import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPlaceMoodsInput } from '../user/user-create-nested-one-without-place-moods.input';

@InputType()
export class PlaceMoodCreateWithoutPlaceInput {

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => UserCreateNestedOneWithoutPlaceMoodsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutPlaceMoodsInput;
}
