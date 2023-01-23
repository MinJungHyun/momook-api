import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutReviewsInput } from './place-create-without-reviews.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutReviewsInput } from './place-create-or-connect-without-reviews.input';
import { PlaceUpsertWithoutReviewsInput } from './place-upsert-without-reviews.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { PlaceUpdateWithoutReviewsInput } from './place-update-without-reviews.input';

@InputType()
export class PlaceUpdateOneWithoutReviewsNestedInput {

    @Field(() => PlaceCreateWithoutReviewsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutReviewsInput)
    create?: PlaceCreateWithoutReviewsInput;

    @Field(() => PlaceCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutReviewsInput;

    @Field(() => PlaceUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => PlaceUpsertWithoutReviewsInput)
    upsert?: PlaceUpsertWithoutReviewsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;

    @Field(() => PlaceUpdateWithoutReviewsInput, {nullable:true})
    @Type(() => PlaceUpdateWithoutReviewsInput)
    update?: PlaceUpdateWithoutReviewsInput;
}
