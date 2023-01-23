import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereInput } from './review-comment-mood-where.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodOrderByWithRelationInput } from './review-comment-mood-order-by-with-relation.input';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCommentMoodCountAggregateInput } from './review-comment-mood-count-aggregate.input';
import { ReviewCommentMoodAvgAggregateInput } from './review-comment-mood-avg-aggregate.input';
import { ReviewCommentMoodSumAggregateInput } from './review-comment-mood-sum-aggregate.input';
import { ReviewCommentMoodMinAggregateInput } from './review-comment-mood-min-aggregate.input';
import { ReviewCommentMoodMaxAggregateInput } from './review-comment-mood-max-aggregate.input';

@ArgsType()
export class ReviewCommentMoodAggregateArgs {

    @Field(() => ReviewCommentMoodWhereInput, {nullable:true})
    @Type(() => ReviewCommentMoodWhereInput)
    where?: ReviewCommentMoodWhereInput;

    @Field(() => [ReviewCommentMoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCommentMoodOrderByWithRelationInput>;

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:true})
    cursor?: ReviewCommentMoodWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCommentMoodCountAggregateInput, {nullable:true})
    _count?: ReviewCommentMoodCountAggregateInput;

    @Field(() => ReviewCommentMoodAvgAggregateInput, {nullable:true})
    _avg?: ReviewCommentMoodAvgAggregateInput;

    @Field(() => ReviewCommentMoodSumAggregateInput, {nullable:true})
    _sum?: ReviewCommentMoodSumAggregateInput;

    @Field(() => ReviewCommentMoodMinAggregateInput, {nullable:true})
    _min?: ReviewCommentMoodMinAggregateInput;

    @Field(() => ReviewCommentMoodMaxAggregateInput, {nullable:true})
    _max?: ReviewCommentMoodMaxAggregateInput;
}
