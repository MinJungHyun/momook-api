import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutPlaceMoodsInput } from '../place/place-create-nested-one-without-place-moods.input';
import { UserCreateNestedOneWithoutPlaceMoodsInput } from '../user/user-create-nested-one-without-place-moods.input';

@InputType()
export class PlaceMoodCreateInput {

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlaceCreateNestedOneWithoutPlaceMoodsInput, {nullable:true})
    place?: PlaceCreateNestedOneWithoutPlaceMoodsInput;

    @Field(() => UserCreateNestedOneWithoutPlaceMoodsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutPlaceMoodsInput;
}
