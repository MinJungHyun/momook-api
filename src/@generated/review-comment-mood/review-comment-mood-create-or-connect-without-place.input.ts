import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateWithoutPlaceInput } from './review-comment-mood-create-without-place.input';

@InputType()
export class ReviewCommentMoodCreateOrConnectWithoutPlaceInput {

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    where!: ReviewCommentMoodWhereUniqueInput;

    @Field(() => ReviewCommentMoodCreateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewCommentMoodCreateWithoutPlaceInput)
    create!: ReviewCommentMoodCreateWithoutPlaceInput;
}
