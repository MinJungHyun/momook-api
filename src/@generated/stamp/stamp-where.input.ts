import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumMealTypeFilter } from '../prisma/enum-meal-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlaceRelationFilter } from '../place/place-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class StampWhereInput {

    @Field(() => [StampWhereInput], {nullable:true})
    AND?: Array<StampWhereInput>;

    @Field(() => [StampWhereInput], {nullable:true})
    OR?: Array<StampWhereInput>;

    @Field(() => [StampWhereInput], {nullable:true})
    NOT?: Array<StampWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => EnumMealTypeFilter, {nullable:true})
    mealType?: EnumMealTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PlaceRelationFilter, {nullable:true})
    place?: PlaceRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    placeId?: IntNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
