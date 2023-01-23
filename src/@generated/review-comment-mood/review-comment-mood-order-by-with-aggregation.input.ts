import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReviewCommentMoodCountOrderByAggregateInput } from './review-comment-mood-count-order-by-aggregate.input';
import { ReviewCommentMoodAvgOrderByAggregateInput } from './review-comment-mood-avg-order-by-aggregate.input';
import { ReviewCommentMoodMaxOrderByAggregateInput } from './review-comment-mood-max-order-by-aggregate.input';
import { ReviewCommentMoodMinOrderByAggregateInput } from './review-comment-mood-min-order-by-aggregate.input';
import { ReviewCommentMoodSumOrderByAggregateInput } from './review-comment-mood-sum-order-by-aggregate.input';

@InputType()
export class ReviewCommentMoodOrderByWithAggregationInput {

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
    reviewCommentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ReviewCommentMoodCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewCommentMoodCountOrderByAggregateInput;

    @Field(() => ReviewCommentMoodAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewCommentMoodAvgOrderByAggregateInput;

    @Field(() => ReviewCommentMoodMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewCommentMoodMaxOrderByAggregateInput;

    @Field(() => ReviewCommentMoodMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewCommentMoodMinOrderByAggregateInput;

    @Field(() => ReviewCommentMoodSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewCommentMoodSumOrderByAggregateInput;
}
