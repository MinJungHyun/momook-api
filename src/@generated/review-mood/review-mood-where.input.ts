import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlaceRelationFilter } from '../place/place-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ReviewRelationFilter } from '../review/review-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ReviewMoodWhereInput {

    @Field(() => [ReviewMoodWhereInput], {nullable:true})
    AND?: Array<ReviewMoodWhereInput>;

    @Field(() => [ReviewMoodWhereInput], {nullable:true})
    OR?: Array<ReviewMoodWhereInput>;

    @Field(() => [ReviewMoodWhereInput], {nullable:true})
    NOT?: Array<ReviewMoodWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    status?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

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
}
