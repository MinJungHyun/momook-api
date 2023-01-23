import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlaceMoodUpdateManyWithoutPlaceNestedInput } from '../place-mood/place-mood-update-many-without-place-nested.input';
import { ReviewUpdateManyWithoutPlaceNestedInput } from '../review/review-update-many-without-place-nested.input';
import { ReviewCommentUpdateManyWithoutPlaceNestedInput } from '../review-comment/review-comment-update-many-without-place-nested.input';
import { ReviewMoodUpdateManyWithoutPlaceNestedInput } from '../review-mood/review-mood-update-many-without-place-nested.input';
import { StampUpdateManyWithoutPlaceNestedInput } from '../stamp/stamp-update-many-without-place-nested.input';

@InputType()
export class PlaceUpdateWithoutReviewCommentMoodsInput {

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

    @Field(() => PlaceMoodUpdateManyWithoutPlaceNestedInput, {nullable:true})
    placeMoods?: PlaceMoodUpdateManyWithoutPlaceNestedInput;

    @Field(() => ReviewUpdateManyWithoutPlaceNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutPlaceNestedInput;

    @Field(() => ReviewCommentUpdateManyWithoutPlaceNestedInput, {nullable:true})
    reviewComments?: ReviewCommentUpdateManyWithoutPlaceNestedInput;

    @Field(() => ReviewMoodUpdateManyWithoutPlaceNestedInput, {nullable:true})
    reviewMoods?: ReviewMoodUpdateManyWithoutPlaceNestedInput;

    @Field(() => StampUpdateManyWithoutPlaceNestedInput, {nullable:true})
    stamps?: StampUpdateManyWithoutPlaceNestedInput;
}
