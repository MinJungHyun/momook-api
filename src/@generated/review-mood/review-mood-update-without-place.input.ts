import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReviewUpdateOneWithoutReviewMoodsNestedInput } from '../review/review-update-one-without-review-moods-nested.input';
import { UserUpdateOneWithoutReviewMoodsNestedInput } from '../user/user-update-one-without-review-moods-nested.input';

@InputType()
export class ReviewMoodUpdateWithoutPlaceInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    status?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ReviewUpdateOneWithoutReviewMoodsNestedInput, {nullable:true})
    review?: ReviewUpdateOneWithoutReviewMoodsNestedInput;

    @Field(() => UserUpdateOneWithoutReviewMoodsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutReviewMoodsNestedInput;
}
