import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumMealTypeFieldUpdateOperationsInput } from '../prisma/enum-meal-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutStampsNestedInput } from '../user/user-update-one-without-stamps-nested.input';

@InputType()
export class StampUpdateWithoutPlaceInput {

    @Field(() => EnumMealTypeFieldUpdateOperationsInput, {nullable:true})
    mealType?: EnumMealTypeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutStampsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutStampsNestedInput;
}
