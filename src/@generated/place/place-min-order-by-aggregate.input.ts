import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PlaceMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lng?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kakaoPlaceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewCnt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pointAvg?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likeCnt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
