import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReviewCommentMoodCountAggregate } from './review-comment-mood-count-aggregate.output';
import { ReviewCommentMoodAvgAggregate } from './review-comment-mood-avg-aggregate.output';
import { ReviewCommentMoodSumAggregate } from './review-comment-mood-sum-aggregate.output';
import { ReviewCommentMoodMinAggregate } from './review-comment-mood-min-aggregate.output';
import { ReviewCommentMoodMaxAggregate } from './review-comment-mood-max-aggregate.output';

@ObjectType()
export class AggregateReviewCommentMood {

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
