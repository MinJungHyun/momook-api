import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlaceMoodListRelationFilter } from '../place-mood/place-mood-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { ReviewCommentListRelationFilter } from '../review-comment/review-comment-list-relation-filter.input';
import { ReviewCommentMoodListRelationFilter } from '../review-comment-mood/review-comment-mood-list-relation-filter.input';
import { ReviewMoodListRelationFilter } from '../review-mood/review-mood-list-relation-filter.input';
import { StampListRelationFilter } from '../stamp/stamp-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    socialType?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

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
