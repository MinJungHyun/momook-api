import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaceOrderByWithRelationInput } from '../place/place-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ReviewCommentOrderByRelationAggregateInput } from '../review-comment/review-comment-order-by-relation-aggregate.input';
import { ReviewMoodOrderByRelationAggregateInput } from '../review-mood/review-mood-order-by-relation-aggregate.input';
import { ReviewCommentMoodOrderByRelationAggregateInput } from '../review-comment-mood/review-comment-mood-order-by-relation-aggregate.input';

@InputType()
export class ReviewOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    point?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PlaceOrderByWithRelationInput, {nullable:true})
    place?: PlaceOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    placeId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ReviewCommentOrderByRelationAggregateInput, {nullable:true})
    reviewComments?: ReviewCommentOrderByRelationAggregateInput;

    @Field(() => ReviewMoodOrderByRelationAggregateInput, {nullable:true})
    reviewMoods?: ReviewMoodOrderByRelationAggregateInput;

    @Field(() => ReviewCommentMoodOrderByRelationAggregateInput, {nullable:true})
    ReviewCommentMood?: ReviewCommentMoodOrderByRelationAggregateInput;
}
