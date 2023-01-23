import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutPlaceInput } from './review-update-without-place.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutPlaceInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutPlaceInput)
    data!: ReviewUpdateWithoutPlaceInput;
}
