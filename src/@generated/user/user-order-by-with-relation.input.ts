import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaceMoodOrderByRelationAggregateInput } from '../place-mood/place-mood-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { ReviewCommentOrderByRelationAggregateInput } from '../review-comment/review-comment-order-by-relation-aggregate.input';
import { ReviewCommentMoodOrderByRelationAggregateInput } from '../review-comment-mood/review-comment-mood-order-by-relation-aggregate.input';
import { ReviewMoodOrderByRelationAggregateInput } from '../review-mood/review-mood-order-by-relation-aggregate.input';
import { StampOrderByRelationAggregateInput } from '../stamp/stamp-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    socialType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PlaceMoodOrderByRelationAggregateInput, {nullable:true})
    placeMoods?: PlaceMoodOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => ReviewCommentOrderByRelationAggregateInput, {nullable:true})
    reviewComments?: ReviewCommentOrderByRelationAggregateInput;

    @Field(() => ReviewCommentMoodOrderByRelationAggregateInput, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodOrderByRelationAggregateInput;

    @Field(() => ReviewMoodOrderByRelationAggregateInput, {nullable:true})
    reviewMoods?: ReviewMoodOrderByRelationAggregateInput;

    @Field(() => StampOrderByRelationAggregateInput, {nullable:true})
    stamps?: StampOrderByRelationAggregateInput;
}
