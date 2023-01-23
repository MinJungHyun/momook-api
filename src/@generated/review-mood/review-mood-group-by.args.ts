import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewMoodWhereInput } from './review-mood-where.input';
import { Type } from 'class-transformer';
import { ReviewMoodOrderByWithAggregationInput } from './review-mood-order-by-with-aggregation.input';
import { ReviewMoodScalarFieldEnum } from './review-mood-scalar-field.enum';
import { ReviewMoodScalarWhereWithAggregatesInput } from './review-mood-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewMoodCountAggregateInput } from './review-mood-count-aggregate.input';
import { ReviewMoodAvgAggregateInput } from './review-mood-avg-aggregate.input';
import { ReviewMoodSumAggregateInput } from './review-mood-sum-aggregate.input';
import { ReviewMoodMinAggregateInput } from './review-mood-min-aggregate.input';
import { ReviewMoodMaxAggregateInput } from './review-mood-max-aggregate.input';

@ArgsType()
export class ReviewMoodGroupByArgs {

    @Field(() => ReviewMoodWhereInput, {nullable:true})
    @Type(() => ReviewMoodWhereInput)
    where?: ReviewMoodWhereInput;

    @Field(() => [ReviewMoodOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewMoodOrderByWithAggregationInput>;

    @Field(() => [ReviewMoodScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewMoodScalarFieldEnum>;

    @Field(() => ReviewMoodScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewMoodScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewMoodCountAggregateInput, {nullable:true})
    _count?: ReviewMoodCountAggregateInput;

    @Field(() => ReviewMoodAvgAggregateInput, {nullable:true})
    _avg?: ReviewMoodAvgAggregateInput;

    @Field(() => ReviewMoodSumAggregateInput, {nullable:true})
    _sum?: ReviewMoodSumAggregateInput;

    @Field(() => ReviewMoodMinAggregateInput, {nullable:true})
    _min?: ReviewMoodMinAggregateInput;

    @Field(() => ReviewMoodMaxAggregateInput, {nullable:true})
    _max?: ReviewMoodMaxAggregateInput;
}
