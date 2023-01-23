import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { PlaceRelationFilter } from '../place/place-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ReviewCommentListRelationFilter } from '../review-comment/review-comment-list-relation-filter.input';
import { ReviewMoodListRelationFilter } from '../review-mood/review-mood-list-relation-filter.input';
import { ReviewCommentMoodListRelationFilter } from '../review-comment-mood/review-comment-mood-list-relation-filter.input';

@InputType()
export class ReviewWhereInput {

    @Field(() => [ReviewWhereInput], {nullable:true})
    AND?: Array<ReviewWhereInput>;

    @Field(() => [ReviewWhereInput], {nullable:true})
    OR?: Array<ReviewWhereInput>;

    @Field(() => [ReviewWhereInput], {nullable:true})
    NOT?: Array<ReviewWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    point?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PlaceRelationFilter, {nullable:true})
    place?: PlaceRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    placeId?: IntNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => ReviewCommentListRelationFilter, {nullable:true})
    reviewComments?: ReviewCommentListRelationFilter;

    @Field(() => ReviewMoodListRelationFilter, {nullable:true})
    reviewMoods?: ReviewMoodListRelationFilter;

    @Field(() => ReviewCommentMoodListRelationFilter, {nullable:true})
    ReviewCommentMood?: ReviewCommentMoodListRelationFilter;
}
