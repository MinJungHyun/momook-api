import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCommentCountAggregate } from './review-comment-count-aggregate.output';
import { ReviewCommentAvgAggregate } from './review-comment-avg-aggregate.output';
import { ReviewCommentSumAggregate } from './review-comment-sum-aggregate.output';
import { ReviewCommentMinAggregate } from './review-comment-min-aggregate.output';
import { ReviewCommentMaxAggregate } from './review-comment-max-aggregate.output';

@ObjectType()
export class ReviewCommentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    placeId?: number;

    @Field(() => Int, {nullable:true})
    reviewId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => ReviewCommentCountAggregate, {nullable:true})
    _count?: ReviewCommentCountAggregate;

    @Field(() => ReviewCommentAvgAggregate, {nullable:true})
    _avg?: ReviewCommentAvgAggregate;

    @Field(() => ReviewCommentSumAggregate, {nullable:true})
    _sum?: ReviewCommentSumAggregate;

    @Field(() => ReviewCommentMinAggregate, {nullable:true})
    _min?: ReviewCommentMinAggregate;

    @Field(() => ReviewCommentMaxAggregate, {nullable:true})
    _max?: ReviewCommentMaxAggregate;
}
