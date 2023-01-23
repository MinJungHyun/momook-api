import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StampCountOrderByAggregateInput } from './stamp-count-order-by-aggregate.input';
import { StampAvgOrderByAggregateInput } from './stamp-avg-order-by-aggregate.input';
import { StampMaxOrderByAggregateInput } from './stamp-max-order-by-aggregate.input';
import { StampMinOrderByAggregateInput } from './stamp-min-order-by-aggregate.input';
import { StampSumOrderByAggregateInput } from './stamp-sum-order-by-aggregate.input';

@InputType()
export class StampOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mealType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    placeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => StampCountOrderByAggregateInput, {nullable:true})
    _count?: StampCountOrderByAggregateInput;

    @Field(() => StampAvgOrderByAggregateInput, {nullable:true})
    _avg?: StampAvgOrderByAggregateInput;

    @Field(() => StampMaxOrderByAggregateInput, {nullable:true})
    _max?: StampMaxOrderByAggregateInput;

    @Field(() => StampMinOrderByAggregateInput, {nullable:true})
    _min?: StampMinOrderByAggregateInput;

    @Field(() => StampSumOrderByAggregateInput, {nullable:true})
    _sum?: StampSumOrderByAggregateInput;
}
