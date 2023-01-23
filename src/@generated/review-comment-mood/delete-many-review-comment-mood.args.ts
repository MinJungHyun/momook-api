import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereInput } from './review-comment-mood-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReviewCommentMoodArgs {

    @Field(() => ReviewCommentMoodWhereInput, {nullable:true})
    @Type(() => ReviewCommentMoodWhereInput)
    where?: ReviewCommentMoodWhereInput;
}
