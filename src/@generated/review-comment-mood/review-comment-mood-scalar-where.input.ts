import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ReviewCommentMoodScalarWhereInput {

    @Field(() => [ReviewCommentMoodScalarWhereInput], {nullable:true})
    AND?: Array<ReviewCommentMoodScalarWhereInput>;

    @Field(() => [ReviewCommentMoodScalarWhereInput], {nullable:true})
    OR?: Array<ReviewCommentMoodScalarWhereInput>;

    @Field(() => [ReviewCommentMoodScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewCommentMoodScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    status?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    placeId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    reviewCommentId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    reviewId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
