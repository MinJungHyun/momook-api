import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewMoodCountAggregate } from './review-mood-count-aggregate.output';
import { ReviewMoodAvgAggregate } from './review-mood-avg-aggregate.output';
import { ReviewMoodSumAggregate } from './review-mood-sum-aggregate.output';
import { ReviewMoodMinAggregate } from './review-mood-min-aggregate.output';
import { ReviewMoodMaxAggregate } from './review-mood-max-aggregate.output';

@ObjectType()
export class ReviewMoodGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    placeId?: number;

    @Field(() => Int, {nullable:true})
    reviewId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => ReviewMoodCountAggregate, {nullable:true})
    _count?: ReviewMoodCountAggregate;

    @Field(() => ReviewMoodAvgAggregate, {nullable:true})
    _avg?: ReviewMoodAvgAggregate;

    @Field(() => ReviewMoodSumAggregate, {nullable:true})
    _sum?: ReviewMoodSumAggregate;

    @Field(() => ReviewMoodMinAggregate, {nullable:true})
    _min?: ReviewMoodMinAggregate;

    @Field(() => ReviewMoodMaxAggregate, {nullable:true})
    _max?: ReviewMoodMaxAggregate;
}
