import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutReviewsInput } from './place-create-without-reviews.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutReviewsInput } from './place-create-or-connect-without-reviews.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';

@InputType()
export class PlaceCreateNestedOneWithoutReviewsInput {

    @Field(() => PlaceCreateWithoutReviewsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutReviewsInput)
    create?: PlaceCreateWithoutReviewsInput;

    @Field(() => PlaceCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutReviewsInput;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;
}
