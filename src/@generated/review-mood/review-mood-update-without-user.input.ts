import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlaceUpdateOneWithoutReviewMoodsNestedInput } from '../place/place-update-one-without-review-moods-nested.input';
import { ReviewUpdateOneWithoutReviewMoodsNestedInput } from '../review/review-update-one-without-review-moods-nested.input';

@InputType()
export class ReviewMoodUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    status?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlaceUpdateOneWithoutReviewMoodsNestedInput, {nullable:true})
    place?: PlaceUpdateOneWithoutReviewMoodsNestedInput;

    @Field(() => ReviewUpdateOneWithoutReviewMoodsNestedInput, {nullable:true})
    review?: ReviewUpdateOneWithoutReviewMoodsNestedInput;
}
