import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateWithoutUserInput } from './review-comment-mood-create-without-user.input';

@InputType()
export class ReviewCommentMoodCreateOrConnectWithoutUserInput {

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    where!: ReviewCommentMoodWhereUniqueInput;

    @Field(() => ReviewCommentMoodCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCommentMoodCreateWithoutUserInput)
    create!: ReviewCommentMoodCreateWithoutUserInput;
}
