import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateInput } from './review-comment-mood-create.input';
import { ReviewCommentMoodUpdateInput } from './review-comment-mood-update.input';

@ArgsType()
export class UpsertOneReviewCommentMoodArgs {

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    where!: ReviewCommentMoodWhereUniqueInput;

    @Field(() => ReviewCommentMoodCreateInput, {nullable:false})
    @Type(() => ReviewCommentMoodCreateInput)
    create!: ReviewCommentMoodCreateInput;

    @Field(() => ReviewCommentMoodUpdateInput, {nullable:false})
    @Type(() => ReviewCommentMoodUpdateInput)
    update!: ReviewCommentMoodUpdateInput;
}
