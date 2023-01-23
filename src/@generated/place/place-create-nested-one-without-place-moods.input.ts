import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutPlaceMoodsInput } from './place-create-without-place-moods.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutPlaceMoodsInput } from './place-create-or-connect-without-place-moods.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';

@InputType()
export class PlaceCreateNestedOneWithoutPlaceMoodsInput {

    @Field(() => PlaceCreateWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutPlaceMoodsInput)
    create?: PlaceCreateWithoutPlaceMoodsInput;

    @Field(() => PlaceCreateOrConnectWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutPlaceMoodsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutPlaceMoodsInput;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;
}
