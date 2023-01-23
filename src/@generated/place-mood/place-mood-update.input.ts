import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlaceUpdateOneWithoutPlaceMoodsNestedInput } from '../place/place-update-one-without-place-moods-nested.input';
import { UserUpdateOneWithoutPlaceMoodsNestedInput } from '../user/user-update-one-without-place-moods-nested.input';

@InputType()
export class PlaceMoodUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    status?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlaceUpdateOneWithoutPlaceMoodsNestedInput, {nullable:true})
    place?: PlaceUpdateOneWithoutPlaceMoodsNestedInput;

    @Field(() => UserUpdateOneWithoutPlaceMoodsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutPlaceMoodsNestedInput;
}
