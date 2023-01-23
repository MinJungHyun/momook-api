import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ReviewUncheckedCreateNestedManyWithoutPlaceInput } from '../review/review-unchecked-create-nested-many-without-place.input';
import { ReviewCommentUncheckedCreateNestedManyWithoutPlaceInput } from '../review-comment/review-comment-unchecked-create-nested-many-without-place.input';
import { ReviewCommentMoodUncheckedCreateNestedManyWithoutPlaceInput } from '../review-comment-mood/review-comment-mood-unchecked-create-nested-many-without-place.input';
import { ReviewMoodUncheckedCreateNestedManyWithoutPlaceInput } from '../review-mood/review-mood-unchecked-create-nested-many-without-place.input';
import { StampUncheckedCreateNestedManyWithoutPlaceInput } from '../stamp/stamp-unchecked-create-nested-many-without-place.input';

@InputType()
export class PlaceUncheckedCreateWithoutPlaceMoodsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    lat!: number;

    @Field(() => Float, {nullable:false})
    lng!: number;

    @Field(() => String, {nullable:false})
    kakaoPlaceId!: string;

    @Field(() => Int, {nullable:false})
    reviewCnt!: number;

    @Field(() => Float, {nullable:false})
    pointAvg!: number;

    @Field(() => Int, {nullable:false})
    likeCnt!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutPlaceInput;

    @Field(() => ReviewCommentUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    reviewComments?: ReviewCommentUncheckedCreateNestedManyWithoutPlaceInput;

    @Field(() => ReviewCommentMoodUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodUncheckedCreateNestedManyWithoutPlaceInput;

    @Field(() => ReviewMoodUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    reviewMoods?: ReviewMoodUncheckedCreateNestedManyWithoutPlaceInput;

    @Field(() => StampUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    stamps?: StampUncheckedCreateNestedManyWithoutPlaceInput;
}
