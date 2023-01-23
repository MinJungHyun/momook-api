import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutPlaceMoodsInput } from './place-create-without-place-moods.input';

@InputType()
export class PlaceCreateOrConnectWithoutPlaceMoodsInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: PlaceWhereUniqueInput;

    @Field(() => PlaceCreateWithoutPlaceMoodsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutPlaceMoodsInput)
    create!: PlaceCreateWithoutPlaceMoodsInput;
}
