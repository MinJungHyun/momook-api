import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlaceMoodUncheckedUpdateManyWithoutPlaceNestedInput } from '../place-mood/place-mood-unchecked-update-many-without-place-nested.input';
import { ReviewUncheckedUpdateManyWithoutPlaceNestedInput } from '../review/review-unchecked-update-many-without-place-nested.input';
import { ReviewCommentMoodUncheckedUpdateManyWithoutPlaceNestedInput } from '../review-comment-mood/review-comment-mood-unchecked-update-many-without-place-nested.input';
import { ReviewMoodUncheckedUpdateManyWithoutPlaceNestedInput } from '../review-mood/review-mood-unchecked-update-many-without-place-nested.input';
import { StampUncheckedUpdateManyWithoutPlaceNestedInput } from '../stamp/stamp-unchecked-update-many-without-place-nested.input';

@InputType()
export class PlaceUncheckedUpdateWithoutReviewCommentsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    lat?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    lng?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    kakaoPlaceId?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    reviewCnt?: IntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    pointAvg?: FloatFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likeCnt?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlaceMoodUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    placeMoods?: PlaceMoodUncheckedUpdateManyWithoutPlaceNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutPlaceNestedInput;

    @Field(() => ReviewCommentMoodUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodUncheckedUpdateManyWithoutPlaceNestedInput;

    @Field(() => ReviewMoodUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    reviewMoods?: ReviewMoodUncheckedUpdateManyWithoutPlaceNestedInput;

    @Field(() => StampUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    stamps?: StampUncheckedUpdateManyWithoutPlaceNestedInput;
}
