import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentUpdateInput } from '../review-comment/review-comment-update.input';
import { Type } from 'class-transformer';
import { ReviewCommentWhereUniqueInput } from '../review-comment/review-comment-where-unique.input';

@ArgsType()
export class UpdateOneReviewCommentArgs {

    @Field(() => ReviewCommentUpdateInput, {nullable:false})
    @Type(() => ReviewCommentUpdateInput)
    data!: ReviewCommentUpdateInput;

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentWhereUniqueInput)
    where!: ReviewCommentWhereUniqueInput;
}
