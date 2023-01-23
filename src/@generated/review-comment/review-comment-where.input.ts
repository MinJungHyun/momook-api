import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { PlaceRelationFilter } from '../place/place-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ReviewRelationFilter } from '../review/review-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ReviewCommentMoodListRelationFilter } from '../review-comment-mood/review-comment-mood-list-relation-filter.input';

@InputType()
export class ReviewCommentWhereInput {

    @Field(() => [ReviewCommentWhereInput], {nullable:true})
    AND?: Array<ReviewCommentWhereInput>;

    @Field(() => [ReviewCommentWhereInput], {nullable:true})
    OR?: Array<ReviewCommentWhereInput>;

    @Field(() => [ReviewCommentWhereInput], {nullable:true})
    NOT?: Array<ReviewCommentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

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

    @Field(() => ReviewRelationFilter, {nullable:true})
    review?: ReviewRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    reviewId?: IntNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => ReviewCommentMoodListRelationFilter, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodListRelationFilter;
}
