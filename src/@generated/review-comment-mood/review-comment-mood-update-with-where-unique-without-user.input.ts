import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodUpdateWithoutUserInput } from './review-comment-mood-update-without-user.input';

@InputType()
export class ReviewCommentMoodUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    where!: ReviewCommentMoodWhereUniqueInput;

    @Field(() => ReviewCommentMoodUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCommentMoodUpdateWithoutUserInput)
    data!: ReviewCommentMoodUpdateWithoutUserInput;
}
