import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutReviewCommentMoodInput } from './review-create-without-review-comment-mood.input';

@InputType()
export class ReviewCreateOrConnectWithoutReviewCommentMoodInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewCreateWithoutReviewCommentMoodInput, {nullable:false})
    @Type(() => ReviewCreateWithoutReviewCommentMoodInput)
    create!: ReviewCreateWithoutReviewCommentMoodInput;
}
