import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewMoodUpdateWithoutReviewInput } from './review-mood-update-without-review.input';

@InputType()
export class ReviewMoodUpdateWithWhereUniqueWithoutReviewInput {

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewMoodWhereUniqueInput)
    where!: ReviewMoodWhereUniqueInput;

    @Field(() => ReviewMoodUpdateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewMoodUpdateWithoutReviewInput)
    data!: ReviewMoodUpdateWithoutReviewInput;
}
