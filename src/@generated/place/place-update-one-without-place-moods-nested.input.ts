import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutPlaceMoodsInput } from './place-create-without-place-moods.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutPlaceMoodsInput } from './place-create-or-connect-without-place-moods.input';
import { PlaceUpsertWithoutPlaceMoodsInput } from './place-upsert-without-place-moods.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { PlaceUpdateWithoutPlaceMoodsInput } from './place-update-without-place-moods.input';

@InputType()
export class PlaceUpdateOneWithoutPlaceMoodsNestedInput {

    @Field(() => PlaceCreateWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutPlaceMoodsInput)
    create?: PlaceCreateWithoutPlaceMoodsInput;

    @Field(() => PlaceCreateOrConnectWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutPlaceMoodsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutPlaceMoodsInput;

    @Field(() => PlaceUpsertWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => PlaceUpsertWithoutPlaceMoodsInput)
    upsert?: PlaceUpsertWithoutPlaceMoodsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;

    @Field(() => PlaceUpdateWithoutPlaceMoodsInput, {nullable:true})
    @Type(() => PlaceUpdateWithoutPlaceMoodsInput)
    update?: PlaceUpdateWithoutPlaceMoodsInput;
}
