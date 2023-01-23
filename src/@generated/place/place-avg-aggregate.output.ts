import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PlaceAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    lat?: number;

    @Field(() => Float, {nullable:true})
    lng?: number;

    @Field(() => Float, {nullable:true})
    reviewCnt?: number;

    @Field(() => Float, {nullable:true})
    pointAvg?: number;

    @Field(() => Float, {nullable:true})
    likeCnt?: number;
}
