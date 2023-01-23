import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlaceMoodCreateNestedManyWithoutPlaceInput } from '../place-mood/place-mood-create-nested-many-without-place.input';
import { ReviewCreateNestedManyWithoutPlaceInput } from '../review/review-create-nested-many-without-place.input';
import { ReviewCommentMoodCreateNestedManyWithoutPlaceInput } from '../review-comment-mood/review-comment-mood-create-nested-many-without-place.input';
import { ReviewMoodCreateNestedManyWithoutPlaceInput } from '../review-mood/review-mood-create-nested-many-without-place.input';
import { StampCreateNestedManyWithoutPlaceInput } from '../stamp/stamp-create-nested-many-without-place.input';

@InputType()
export class PlaceCreateWithoutReviewCommentsInput {

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

    @Field(() => PlaceMoodCreateNestedManyWithoutPlaceInput, {nullable:true})
    placeMoods?: PlaceMoodCreateNestedManyWithoutPlaceInput;

    @Field(() => ReviewCreateNestedManyWithoutPlaceInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutPlaceInput;

    @Field(() => ReviewCommentMoodCreateNestedManyWithoutPlaceInput, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodCreateNestedManyWithoutPlaceInput;

    @Field(() => ReviewMoodCreateNestedManyWithoutPlaceInput, {nullable:true})
    reviewMoods?: ReviewMoodCreateNestedManyWithoutPlaceInput;

    @Field(() => StampCreateNestedManyWithoutPlaceInput, {nullable:true})
    stamps?: StampCreateNestedManyWithoutPlaceInput;
}
