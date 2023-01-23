import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodUpdateWithoutPlaceInput } from './review-comment-mood-update-without-place.input';

@InputType()
export class ReviewCommentMoodUpdateWithWhereUniqueWithoutPlaceInput {

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    where!: ReviewCommentMoodWhereUniqueInput;

    @Field(() => ReviewCommentMoodUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewCommentMoodUpdateWithoutPlaceInput)
    data!: ReviewCommentMoodUpdateWithoutPlaceInput;
}
