import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PlaceAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lng?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewCnt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pointAvg?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likeCnt?: keyof typeof SortOrder;
}
