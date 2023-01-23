import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumMealTypeWithAggregatesFilter } from '../prisma/enum-meal-type-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class StampScalarWhereWithAggregatesInput {

    @Field(() => [StampScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StampScalarWhereWithAggregatesInput>;

    @Field(() => [StampScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StampScalarWhereWithAggregatesInput>;

    @Field(() => [StampScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StampScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => EnumMealTypeWithAggregatesFilter, {nullable:true})
    mealType?: EnumMealTypeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    placeId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;
}
