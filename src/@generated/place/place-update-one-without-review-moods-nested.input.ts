import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutReviewMoodsInput } from './place-create-without-review-moods.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutReviewMoodsInput } from './place-create-or-connect-without-review-moods.input';
import { PlaceUpsertWithoutReviewMoodsInput } from './place-upsert-without-review-moods.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { PlaceUpdateWithoutReviewMoodsInput } from './place-update-without-review-moods.input';

@InputType()
export class PlaceUpdateOneWithoutReviewMoodsNestedInput {

    @Field(() => PlaceCreateWithoutReviewMoodsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutReviewMoodsInput)
    create?: PlaceCreateWithoutReviewMoodsInput;

    @Field(() => PlaceCreateOrConnectWithoutReviewMoodsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutReviewMoodsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutReviewMoodsInput;

    @Field(() => PlaceUpsertWithoutReviewMoodsInput, {nullable:true})
    @Type(() => PlaceUpsertWithoutReviewMoodsInput)
    upsert?: PlaceUpsertWithoutReviewMoodsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;

    @Field(() => PlaceUpdateWithoutReviewMoodsInput, {nullable:true})
    @Type(() => PlaceUpdateWithoutReviewMoodsInput)
    update?: PlaceUpdateWithoutReviewMoodsInput;
}
