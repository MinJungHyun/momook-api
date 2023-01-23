import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceUpdateWithoutStampsInput } from './place-update-without-stamps.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutStampsInput } from './place-create-without-stamps.input';

@InputType()
export class PlaceUpsertWithoutStampsInput {

    @Field(() => PlaceUpdateWithoutStampsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutStampsInput)
    update!: PlaceUpdateWithoutStampsInput;

    @Field(() => PlaceCreateWithoutStampsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutStampsInput)
    create!: PlaceCreateWithoutStampsInput;
}
