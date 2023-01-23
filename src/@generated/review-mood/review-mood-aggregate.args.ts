import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewMoodWhereInput } from './review-mood-where.input';
import { Type } from 'class-transformer';
import { ReviewMoodOrderByWithRelationInput } from './review-mood-order-by-with-relation.input';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewMoodCountAggregateInput } from './review-mood-count-aggregate.input';
import { ReviewMoodAvgAggregateInput } from './review-mood-avg-aggregate.input';
import { ReviewMoodSumAggregateInput } from './review-mood-sum-aggregate.input';
import { ReviewMoodMinAggregateInput } from './review-mood-min-aggregate.input';
import { ReviewMoodMaxAggregateInput } from './review-mood-max-aggregate.input';

@ArgsType()
export class ReviewMoodAggregateArgs {

    @Field(() => ReviewMoodWhereInput, {nullable:true})
    @Type(() => ReviewMoodWhereInput)
    where?: ReviewMoodWhereInput;

    @Field(() => [ReviewMoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewMoodOrderByWithRelationInput>;

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:true})
    cursor?: ReviewMoodWhereUniqueInput;

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
