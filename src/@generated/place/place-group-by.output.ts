import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PlaceCountAggregate } from './place-count-aggregate.output';
import { PlaceAvgAggregate } from './place-avg-aggregate.output';
import { PlaceSumAggregate } from './place-sum-aggregate.output';
import { PlaceMinAggregate } from './place-min-aggregate.output';
import { PlaceMaxAggregate } from './place-max-aggregate.output';

@ObjectType()
export class PlaceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    lat!: number;

    @Field(() => Float, {nullable:false})
    lng!: number;

    @Field(() => String, {nullable:false})
    kakaoPlaceId!: string;

    @Field(() => Int, {nullable:false})
    reviewCnt!: number;

    @Field(() => Float, {nullable:false})
    pointAvg!: number;

    @Field(() => Int, {nullable:false})
    likeCnt!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlaceCountAggregate, {nullable:true})
    _count?: PlaceCountAggregate;

    @Field(() => PlaceAvgAggregate, {nullable:true})
    _avg?: PlaceAvgAggregate;

    @Field(() => PlaceSumAggregate, {nullable:true})
    _sum?: PlaceSumAggregate;

    @Field(() => PlaceMinAggregate, {nullable:true})
    _min?: PlaceMinAggregate;

    @Field(() => PlaceMaxAggregate, {nullable:true})
    _max?: PlaceMaxAggregate;
}
