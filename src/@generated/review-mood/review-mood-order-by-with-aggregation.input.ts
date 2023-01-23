import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReviewMoodCountOrderByAggregateInput } from './review-mood-count-order-by-aggregate.input';
import { ReviewMoodAvgOrderByAggregateInput } from './review-mood-avg-order-by-aggregate.input';
import { ReviewMoodMaxOrderByAggregateInput } from './review-mood-max-order-by-aggregate.input';
import { ReviewMoodMinOrderByAggregateInput } from './review-mood-min-order-by-aggregate.input';
import { ReviewMoodSumOrderByAggregateInput } from './review-mood-sum-order-by-aggregate.input';

@InputType()
export class ReviewMoodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    placeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ReviewMoodCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewMoodCountOrderByAggregateInput;

    @Field(() => ReviewMoodAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewMoodAvgOrderByAggregateInput;

    @Field(() => ReviewMoodMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewMoodMaxOrderByAggregateInput;

    @Field(() => ReviewMoodMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewMoodMinOrderByAggregateInput;

    @Field(() => ReviewMoodSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewMoodSumOrderByAggregateInput;
}
