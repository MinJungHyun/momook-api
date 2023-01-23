import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReviewUpdateManyWithoutUserNestedInput } from '../review/review-update-many-without-user-nested.input';
import { ReviewCommentUpdateManyWithoutUserNestedInput } from '../review-comment/review-comment-update-many-without-user-nested.input';
import { ReviewCommentMoodUpdateManyWithoutUserNestedInput } from '../review-comment-mood/review-comment-mood-update-many-without-user-nested.input';
import { ReviewMoodUpdateManyWithoutUserNestedInput } from '../review-mood/review-mood-update-many-without-user-nested.input';
import { StampUpdateManyWithoutUserNestedInput } from '../stamp/stamp-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutPlaceMoodsInput {

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

    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewCommentUpdateManyWithoutUserNestedInput, {nullable:true})
    reviewComments?: ReviewCommentUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewCommentMoodUpdateManyWithoutUserNestedInput, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewMoodUpdateManyWithoutUserNestedInput, {nullable:true})
    reviewMoods?: ReviewMoodUpdateManyWithoutUserNestedInput;

    @Field(() => StampUpdateManyWithoutUserNestedInput, {nullable:true})
    stamps?: StampUpdateManyWithoutUserNestedInput;
}
