import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutReviewMoodsInput } from './place-create-without-review-moods.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutReviewMoodsInput } from './place-create-or-connect-without-review-moods.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';

@InputType()
export class PlaceCreateNestedOneWithoutReviewMoodsInput {

    @Field(() => PlaceCreateWithoutReviewMoodsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutReviewMoodsInput)
    create?: PlaceCreateWithoutReviewMoodsInput;

    @Field(() => PlaceCreateOrConnectWithoutReviewMoodsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutReviewMoodsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutReviewMoodsInput;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;
}
