import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutStampsInput } from './place-create-without-stamps.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutStampsInput } from './place-create-or-connect-without-stamps.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';

@InputType()
export class PlaceCreateNestedOneWithoutStampsInput {

    @Field(() => PlaceCreateWithoutStampsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutStampsInput)
    create?: PlaceCreateWithoutStampsInput;

    @Field(() => PlaceCreateOrConnectWithoutStampsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutStampsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutStampsInput;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;
}
