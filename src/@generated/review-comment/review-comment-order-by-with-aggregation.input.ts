import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReviewCommentCountOrderByAggregateInput } from './review-comment-count-order-by-aggregate.input';
import { ReviewCommentAvgOrderByAggregateInput } from './review-comment-avg-order-by-aggregate.input';
import { ReviewCommentMaxOrderByAggregateInput } from './review-comment-max-order-by-aggregate.input';
import { ReviewCommentMinOrderByAggregateInput } from './review-comment-min-order-by-aggregate.input';
import { ReviewCommentSumOrderByAggregateInput } from './review-comment-sum-order-by-aggregate.input';

@InputType()
export class ReviewCommentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    placeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ReviewCommentCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewCommentCountOrderByAggregateInput;

    @Field(() => ReviewCommentAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewCommentAvgOrderByAggregateInput;

    @Field(() => ReviewCommentMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewCommentMaxOrderByAggregateInput;

    @Field(() => ReviewCommentMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewCommentMinOrderByAggregateInput;

    @Field(() => ReviewCommentSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewCommentSumOrderByAggregateInput;
}
