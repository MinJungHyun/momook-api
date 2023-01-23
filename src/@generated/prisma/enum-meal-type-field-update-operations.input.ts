import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealType } from './meal-type.enum';

@InputType()
export class EnumMealTypeFieldUpdateOperationsInput {

    @Field(() => MealType, {nullable:true})
    set?: keyof typeof MealType;
}
