import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateInput } from './review-comment-mood-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReviewCommentMoodArgs {

    @Field(() => ReviewCommentMoodCreateInput, {nullable:false})
    @Type(() => ReviewCommentMoodCreateInput)
    data!: ReviewCommentMoodCreateInput;
}
