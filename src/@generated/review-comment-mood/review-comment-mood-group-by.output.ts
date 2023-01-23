import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCommentMoodCountAggregate } from './review-comment-mood-count-aggregate.output';
import { ReviewCommentMoodAvgAggregate } from './review-comment-mood-avg-aggregate.output';
import { ReviewCommentMoodSumAggregate } from './review-comment-mood-sum-aggregate.output';
import { ReviewCommentMoodMinAggregate } from './review-comment-mood-min-aggregate.output';
import { ReviewCommentMoodMaxAggregate } from './review-comment-mood-max-aggregate.output';

@ObjectType()
export class ReviewCommentMoodGroupBy {

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
    reviewCommentId?: number;

    @Field(() => Int, {nullable:true})
    reviewId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => ReviewCommentMoodCountAggregate, {nullable:true})
    _count?: ReviewCommentMoodCountAggregate;

    @Field(() => ReviewCommentMoodAvgAggregate, {nullable:true})
    _avg?: ReviewCommentMoodAvgAggregate;

    @Field(() => ReviewCommentMoodSumAggregate, {nullable:true})
    _sum?: ReviewCommentMoodSumAggregate;

    @Field(() => ReviewCommentMoodMinAggregate, {nullable:true})
    _min?: ReviewCommentMoodMinAggregate;

    @Field(() => ReviewCommentMoodMaxAggregate, {nullable:true})
    _max?: ReviewCommentMoodMaxAggregate;
}
