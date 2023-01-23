import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class PlaceMoodScalarWhereWithAggregatesInput {

    @Field(() => [PlaceMoodScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PlaceMoodScalarWhereWithAggregatesInput>;

    @Field(() => [PlaceMoodScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PlaceMoodScalarWhereWithAggregatesInput>;

    @Field(() => [PlaceMoodScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PlaceMoodScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    status?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    placeId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;
}
