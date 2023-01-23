import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealType } from '../prisma/meal-type.enum';
import { PlaceCreateNestedOneWithoutStampsInput } from '../place/place-create-nested-one-without-stamps.input';

@InputType()
export class StampCreateWithoutUserInput {

    @Field(() => MealType, {nullable:true})
    mealType?: keyof typeof MealType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlaceCreateNestedOneWithoutStampsInput, {nullable:true})
    place?: PlaceCreateNestedOneWithoutStampsInput;
}
