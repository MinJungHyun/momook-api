import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutStampsInput } from './place-create-without-stamps.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutStampsInput } from './place-create-or-connect-without-stamps.input';
import { PlaceUpsertWithoutStampsInput } from './place-upsert-without-stamps.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { PlaceUpdateWithoutStampsInput } from './place-update-without-stamps.input';

@InputType()
export class PlaceUpdateOneWithoutStampsNestedInput {

    @Field(() => PlaceCreateWithoutStampsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutStampsInput)
    create?: PlaceCreateWithoutStampsInput;

    @Field(() => PlaceCreateOrConnectWithoutStampsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutStampsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutStampsInput;

    @Field(() => PlaceUpsertWithoutStampsInput, {nullable:true})
    @Type(() => PlaceUpsertWithoutStampsInput)
    upsert?: PlaceUpsertWithoutStampsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;

    @Field(() => PlaceUpdateWithoutStampsInput, {nullable:true})
    @Type(() => PlaceUpdateWithoutStampsInput)
    update?: PlaceUpdateWithoutStampsInput;
}
