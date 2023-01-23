import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutStampsInput } from './place-create-without-stamps.input';

@InputType()
export class PlaceCreateOrConnectWithoutStampsInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: PlaceWhereUniqueInput;

    @Field(() => PlaceCreateWithoutStampsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutStampsInput)
    create!: PlaceCreateWithoutStampsInput;
}
