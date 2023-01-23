import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentUpdateManyMutationInput } from '../review-comment/review-comment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReviewCommentWhereInput } from '../review-comment/review-comment-where.input';

@ArgsType()
export class UpdateManyReviewCommentArgs {

    @Field(() => ReviewCommentUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCommentUpdateManyMutationInput)
    data!: ReviewCommentUpdateManyMutationInput;

    @Field(() => ReviewCommentWhereInput, {nullable:true})
    @Type(() => ReviewCommentWhereInput)
    where?: ReviewCommentWhereInput;
}
