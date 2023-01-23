import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumMealTypeFilter } from '../prisma/enum-meal-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class StampScalarWhereInput {

    @Field(() => [StampScalarWhereInput], {nullable:true})
    AND?: Array<StampScalarWhereInput>;

    @Field(() => [StampScalarWhereInput], {nullable:true})
    OR?: Array<StampScalarWhereInput>;

    @Field(() => [StampScalarWhereInput], {nullable:true})
    NOT?: Array<StampScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => EnumMealTypeFilter, {nullable:true})
    mealType?: EnumMealTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    placeId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
