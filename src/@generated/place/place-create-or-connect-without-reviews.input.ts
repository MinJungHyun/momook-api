import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutReviewsInput } from './place-create-without-reviews.input';

@InputType()
export class PlaceCreateOrConnectWithoutReviewsInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: PlaceWhereUniqueInput;

    @Field(() => PlaceCreateWithoutReviewsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutReviewsInput)
    create!: PlaceCreateWithoutReviewsInput;
}
