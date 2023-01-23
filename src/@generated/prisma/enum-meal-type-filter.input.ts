import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealType } from './meal-type.enum';
import { NestedEnumMealTypeFilter } from './nested-enum-meal-type-filter.input';

@InputType()
export class EnumMealTypeFilter {

    @Field(() => MealType, {nullable:true})
    equals?: keyof typeof MealType;

    @Field(() => [MealType], {nullable:true})
    in?: Array<keyof typeof MealType>;

    @Field(() => [MealType], {nullable:true})
    notIn?: Array<keyof typeof MealType>;

    @Field(() => NestedEnumMealTypeFilter, {nullable:true})
    not?: NestedEnumMealTypeFilter;
}
