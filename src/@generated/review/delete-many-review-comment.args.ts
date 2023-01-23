import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentWhereInput } from '../review-comment/review-comment-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReviewCommentArgs {

    @Field(() => ReviewCommentWhereInput, {nullable:true})
    @Type(() => ReviewCommentWhereInput)
    where?: ReviewCommentWhereInput;
}
