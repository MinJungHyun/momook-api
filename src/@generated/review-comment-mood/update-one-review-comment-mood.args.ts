import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentMoodUpdateInput } from './review-comment-mood-update.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';

@ArgsType()
export class UpdateOneReviewCommentMoodArgs {

    @Field(() => ReviewCommentMoodUpdateInput, {nullable:false})
    @Type(() => ReviewCommentMoodUpdateInput)
    data!: ReviewCommentMoodUpdateInput;

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    where!: ReviewCommentMoodWhereUniqueInput;
}
