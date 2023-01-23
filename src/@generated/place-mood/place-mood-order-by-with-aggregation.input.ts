import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaceMoodCountOrderByAggregateInput } from './place-mood-count-order-by-aggregate.input';
import { PlaceMoodAvgOrderByAggregateInput } from './place-mood-avg-order-by-aggregate.input';
import { PlaceMoodMaxOrderByAggregateInput } from './place-mood-max-order-by-aggregate.input';
import { PlaceMoodMinOrderByAggregateInput } from './place-mood-min-order-by-aggregate.input';
import { PlaceMoodSumOrderByAggregateInput } from './place-mood-sum-order-by-aggregate.input';

@InputType()
export class PlaceMoodOrderByWithAggregationInput {

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
    userId?: keyof typeof SortOrder;

    @Field(() => PlaceMoodCountOrderByAggregateInput, {nullable:true})
    _count?: PlaceMoodCountOrderByAggregateInput;

    @Field(() => PlaceMoodAvgOrderByAggregateInput, {nullable:true})
    _avg?: PlaceMoodAvgOrderByAggregateInput;

    @Field(() => PlaceMoodMaxOrderByAggregateInput, {nullable:true})
    _max?: PlaceMoodMaxOrderByAggregateInput;

    @Field(() => PlaceMoodMinOrderByAggregateInput, {nullable:true})
    _min?: PlaceMoodMinOrderByAggregateInput;

    @Field(() => PlaceMoodSumOrderByAggregateInput, {nullable:true})
    _sum?: PlaceMoodSumOrderByAggregateInput;
}
