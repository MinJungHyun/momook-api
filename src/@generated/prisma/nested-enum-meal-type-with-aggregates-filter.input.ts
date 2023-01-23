import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealType } from './meal-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMealTypeFilter } from './nested-enum-meal-type-filter.input';

@InputType()
export class NestedEnumMealTypeWithAggregatesFilter {

    @Field(() => MealType, {nullable:true})
    equals?: keyof typeof MealType;

    @Field(() => [MealType], {nullable:true})
    in?: Array<keyof typeof MealType>;

    @Field(() => [MealType], {nullable:true})
    notIn?: Array<keyof typeof MealType>;

    @Field(() => NestedEnumMealTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMealTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMealTypeFilter, {nullable:true})
    _min?: NestedEnumMealTypeFilter;

    @Field(() => NestedEnumMealTypeFilter, {nullable:true})
    _max?: NestedEnumMealTypeFilter;
}
