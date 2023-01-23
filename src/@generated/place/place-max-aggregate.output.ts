import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PlaceMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    lat?: number;

    @Field(() => Float, {nullable:true})
    lng?: number;

    @Field(() => String, {nullable:true})
    kakaoPlaceId?: string;

    @Field(() => Int, {nullable:true})
    reviewCnt?: number;

    @Field(() => Float, {nullable:true})
    pointAvg?: number;

    @Field(() => Int, {nullable:true})
    likeCnt?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
