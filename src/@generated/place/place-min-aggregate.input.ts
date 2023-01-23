import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PlaceMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    lat?: true;

    @Field(() => Boolean, {nullable:true})
    lng?: true;

    @Field(() => Boolean, {nullable:true})
    kakaoPlaceId?: true;

    @Field(() => Boolean, {nullable:true})
    reviewCnt?: true;

    @Field(() => Boolean, {nullable:true})
    pointAvg?: true;

    @Field(() => Boolean, {nullable:true})
    likeCnt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
