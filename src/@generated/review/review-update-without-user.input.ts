import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { PlaceUpdateOneWithoutReviewsNestedInput } from '../place/place-update-one-without-reviews-nested.input';
import { ReviewCommentUpdateManyWithoutReviewNestedInput } from '../review-comment/review-comment-update-many-without-review-nested.input';
import { ReviewMoodUpdateManyWithoutReviewNestedInput } from '../review-mood/review-mood-update-many-without-review-nested.input';
import { ReviewCommentMoodUpdateManyWithoutReviewNestedInput } from '../review-comment-mood/review-comment-mood-update-many-without-review-nested.input';

@InputType()
export class ReviewUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    content?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    point?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlaceUpdateOneWithoutReviewsNestedInput, {nullable:true})
    place?: PlaceUpdateOneWithoutReviewsNestedInput;

    @Field(() => ReviewCommentUpdateManyWithoutReviewNestedInput, {nullable:true})
    reviewComments?: ReviewCommentUpdateManyWithoutReviewNestedInput;

    @Field(() => ReviewMoodUpdateManyWithoutReviewNestedInput, {nullable:true})
    reviewMoods?: ReviewMoodUpdateManyWithoutReviewNestedInput;

    @Field(() => ReviewCommentMoodUpdateManyWithoutReviewNestedInput, {nullable:true})
    ReviewCommentMood?: ReviewCommentMoodUpdateManyWithoutReviewNestedInput;
}
