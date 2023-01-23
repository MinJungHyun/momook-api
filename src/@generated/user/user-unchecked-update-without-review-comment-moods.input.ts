import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlaceMoodUncheckedUpdateManyWithoutUserNestedInput } from '../place-mood/place-mood-unchecked-update-many-without-user-nested.input';
import { ReviewUncheckedUpdateManyWithoutUserNestedInput } from '../review/review-unchecked-update-many-without-user-nested.input';
import { ReviewCommentUncheckedUpdateManyWithoutUserNestedInput } from '../review-comment/review-comment-unchecked-update-many-without-user-nested.input';
import { ReviewMoodUncheckedUpdateManyWithoutUserNestedInput } from '../review-mood/review-mood-unchecked-update-many-without-user-nested.input';
import { StampUncheckedUpdateManyWithoutUserNestedInput } from '../stamp/stamp-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutReviewCommentMoodsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    socialType?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlaceMoodUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    placeMoods?: PlaceMoodUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewCommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviewComments?: ReviewCommentUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewMoodUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviewMoods?: ReviewMoodUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => StampUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    stamps?: StampUncheckedUpdateManyWithoutUserNestedInput;
}
