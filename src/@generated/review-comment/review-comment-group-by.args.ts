import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentWhereInput } from './review-comment-where.input';
import { Type } from 'class-transformer';
import { ReviewCommentOrderByWithAggregationInput } from './review-comment-order-by-with-aggregation.input';
import { ReviewCommentScalarFieldEnum } from './review-comment-scalar-field.enum';
import { ReviewCommentScalarWhereWithAggregatesInput } from './review-comment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewCommentCountAggregateInput } from './review-comment-count-aggregate.input';
import { ReviewCommentAvgAggregateInput } from './review-comment-avg-aggregate.input';
import { ReviewCommentSumAggregateInput } from './review-comment-sum-aggregate.input';
import { ReviewCommentMinAggregateInput } from './review-comment-min-aggregate.input';
import { ReviewCommentMaxAggregateInput } from './review-comment-max-aggregate.input';

@ArgsType()
export class ReviewCommentGroupByArgs {

    @Field(() => ReviewCommentWhereInput, {nullable:true})
    @Type(() => ReviewCommentWhereInput)
    where?: ReviewCommentWhereInput;

    @Field(() => [ReviewCommentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewCommentOrderByWithAggregationInput>;

    @Field(() => [ReviewCommentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewCommentScalarFieldEnum>;

    @Field(() => ReviewCommentScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewCommentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCommentCountAggregateInput, {nullable:true})
    _count?: ReviewCommentCountAggregateInput;

    @Field(() => ReviewCommentAvgAggregateInput, {nullable:true})
    _avg?: ReviewCommentAvgAggregateInput;

    @Field(() => ReviewCommentSumAggregateInput, {nullable:true})
    _sum?: ReviewCommentSumAggregateInput;

    @Field(() => ReviewCommentMinAggregateInput, {nullable:true})
    _min?: ReviewCommentMinAggregateInput;

    @Field(() => ReviewCommentMaxAggregateInput, {nullable:true})
    _max?: ReviewCommentMaxAggregateInput;
}
