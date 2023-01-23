import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewMoodCreateWithoutReviewInput } from './review-mood-create-without-review.input';

@InputType()
export class ReviewMoodCreateOrConnectWithoutReviewInput {

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewMoodWhereUniqueInput)
    where!: ReviewMoodWhereUniqueInput;

    @Field(() => ReviewMoodCreateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewMoodCreateWithoutReviewInput)
    create!: ReviewMoodCreateWithoutReviewInput;
}
