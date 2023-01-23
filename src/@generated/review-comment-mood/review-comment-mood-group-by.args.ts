import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereInput } from './review-comment-mood-where.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodOrderByWithAggregationInput } from './review-comment-mood-order-by-with-aggregation.input';
import { ReviewCommentMoodScalarFieldEnum } from './review-comment-mood-scalar-field.enum';
import { ReviewCommentMoodScalarWhereWithAggregatesInput } from './review-comment-mood-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewCommentMoodCountAggregateInput } from './review-comment-mood-count-aggregate.input';
import { ReviewCommentMoodAvgAggregateInput } from './review-comment-mood-avg-aggregate.input';
import { ReviewCommentMoodSumAggregateInput } from './review-comment-mood-sum-aggregate.input';
import { ReviewCommentMoodMinAggregateInput } from './review-comment-mood-min-aggregate.input';
import { ReviewCommentMoodMaxAggregateInput } from './review-comment-mood-max-aggregate.input';

@ArgsType()
export class ReviewCommentMoodGroupByArgs {

    @Field(() => ReviewCommentMoodWhereInput, {nullable:true})
    @Type(() => ReviewCommentMoodWhereInput)
    where?: ReviewCommentMoodWhereInput;

    @Field(() => [ReviewCommentMoodOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewCommentMoodOrderByWithAggregationInput>;

    @Field(() => [ReviewCommentMoodScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewCommentMoodScalarFieldEnum>;

    @Field(() => ReviewCommentMoodScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewCommentMoodScalarWhereWithAggregatesInput;

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
