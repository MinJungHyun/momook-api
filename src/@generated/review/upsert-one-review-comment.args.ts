import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentWhereUniqueInput } from '../review-comment/review-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateInput } from '../review-comment/review-comment-create.input';
import { ReviewCommentUpdateInput } from '../review-comment/review-comment-update.input';

@ArgsType()
export class UpsertOneReviewCommentArgs {

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentWhereUniqueInput)
    where!: ReviewCommentWhereUniqueInput;

    @Field(() => ReviewCommentCreateInput, {nullable:false})
    @Type(() => ReviewCommentCreateInput)
    create!: ReviewCommentCreateInput;

    @Field(() => ReviewCommentUpdateInput, {nullable:false})
    @Type(() => ReviewCommentUpdateInput)
    update!: ReviewCommentUpdateInput;
}
