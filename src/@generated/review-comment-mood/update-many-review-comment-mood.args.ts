import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentMoodUpdateManyMutationInput } from './review-comment-mood-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodWhereInput } from './review-comment-mood-where.input';

@ArgsType()
export class UpdateManyReviewCommentMoodArgs {

    @Field(() => ReviewCommentMoodUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCommentMoodUpdateManyMutationInput)
    data!: ReviewCommentMoodUpdateManyMutationInput;

    @Field(() => ReviewCommentMoodWhereInput, {nullable:true})
    @Type(() => ReviewCommentMoodWhereInput)
    where?: ReviewCommentMoodWhereInput;
}
