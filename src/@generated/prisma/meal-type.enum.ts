import { registerEnumType } from '@nestjs/graphql';

export enum MealType {
    breakfast = "breakfast",
    lunch = "lunch",
    dinner = "dinner",
    night = "night"
}


registerEnumType(MealType, { name: 'MealType', description: undefined })
