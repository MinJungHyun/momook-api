import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlaceMood } from '../place-mood/place-mood.model';
import { Review } from '../review/review.model';
import { ReviewComment } from '../review-comment/review-comment.model';
import { ReviewCommentMood } from '../review-comment-mood/review-comment-mood.model';
import { ReviewMood } from '../review-mood/review-mood.model';
import { Stamp } from '../stamp/stamp.model';
import { PlaceCount } from './place-count.output';

@ObjectType()
export class Place {

    @Field(() => ID, {nullable:false})
    id!: number;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [PlaceMood], {nullable:true})
    placeMoods?: Array<PlaceMood>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [ReviewComment], {nullable:true})
    reviewComments?: Array<ReviewComment>;

    @Field(() => [ReviewCommentMood], {nullable:true})
    reviewCommentMoods?: Array<ReviewCommentMood>;

    @Field(() => [ReviewMood], {nullable:true})
    reviewMoods?: Array<ReviewMood>;

    @Field(() => [Stamp], {nullable:true})
    stamps?: Array<Stamp>;

    @Field(() => PlaceCount, {nullable:false})
    _count?: PlaceCount;
}
