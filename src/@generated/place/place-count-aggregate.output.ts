import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlaceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    lat!: number;

    @Field(() => Int, {nullable:false})
    lng!: number;

    @Field(() => Int, {nullable:false})
    kakaoPlaceId!: number;

    @Field(() => Int, {nullable:false})
    reviewCnt!: number;

    @Field(() => Int, {nullable:false})
    pointAvg!: number;

    @Field(() => Int, {nullable:false})
    likeCnt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
