import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaceOrderByWithRelationInput } from '../place/place-order-by-with-relation.input';
import { ReviewOrderByWithRelationInput } from '../review/review-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ReviewCommentMoodOrderByRelationAggregateInput } from '../review-comment-mood/review-comment-mood-order-by-relation-aggregate.input';

@InputType()
export class ReviewCommentOrderByWithRelationInput {

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

    @Field(() => PlaceOrderByWithRelationInput, {nullable:true})
    place?: PlaceOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    placeId?: keyof typeof SortOrder;

    @Field(() => ReviewOrderByWithRelationInput, {nullable:true})
    review?: ReviewOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ReviewCommentMoodOrderByRelationAggregateInput, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodOrderByRelationAggregateInput;
}
