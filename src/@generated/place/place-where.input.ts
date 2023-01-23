import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlaceMoodListRelationFilter } from '../place-mood/place-mood-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { ReviewCommentListRelationFilter } from '../review-comment/review-comment-list-relation-filter.input';
import { ReviewCommentMoodListRelationFilter } from '../review-comment-mood/review-comment-mood-list-relation-filter.input';
import { ReviewMoodListRelationFilter } from '../review-mood/review-mood-list-relation-filter.input';
import { StampListRelationFilter } from '../stamp/stamp-list-relation-filter.input';

@InputType()
export class PlaceWhereInput {

    @Field(() => [PlaceWhereInput], {nullable:true})
    AND?: Array<PlaceWhereInput>;

    @Field(() => [PlaceWhereInput], {nullable:true})
    OR?: Array<PlaceWhereInput>;

    @Field(() => [PlaceWhereInput], {nullable:true})
    NOT?: Array<PlaceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    lat?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    lng?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    kakaoPlaceId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    reviewCnt?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    pointAvg?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    likeCnt?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PlaceMoodListRelationFilter, {nullable:true})
    placeMoods?: PlaceMoodListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => ReviewCommentListRelationFilter, {nullable:true})
    reviewComments?: ReviewCommentListRelationFilter;

    @Field(() => ReviewCommentMoodListRelationFilter, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodListRelationFilter;

    @Field(() => ReviewMoodListRelationFilter, {nullable:true})
    reviewMoods?: ReviewMoodListRelationFilter;

    @Field(() => StampListRelationFilter, {nullable:true})
    stamps?: StampListRelationFilter;
}
