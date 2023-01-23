import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutReviewMoodsInput } from './place-create-without-review-moods.input';

@InputType()
export class PlaceCreateOrConnectWithoutReviewMoodsInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: PlaceWhereUniqueInput;

    @Field(() => PlaceCreateWithoutReviewMoodsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutReviewMoodsInput)
    create!: PlaceCreateWithoutReviewMoodsInput;
}
