import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentCreateInput } from '../review-comment/review-comment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReviewCommentArgs {

    @Field(() => ReviewCommentCreateInput, {nullable:false})
    @Type(() => ReviewCommentCreateInput)
    data!: ReviewCommentCreateInput;
}
