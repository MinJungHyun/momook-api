import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentScalarWhereInput } from './review-comment-scalar-where.input';
import { Type } from 'class-transformer';
import { ReviewCommentUpdateManyMutationInput } from './review-comment-update-many-mutation.input';

@InputType()
export class ReviewCommentUpdateManyWithWhereWithoutReviewInput {

    @Field(() => ReviewCommentScalarWhereInput, {nullable:false})
    @Type(() => ReviewCommentScalarWhereInput)
    where!: ReviewCommentScalarWhereInput;

    @Field(() => ReviewCommentUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCommentUpdateManyMutationInput)
    data!: ReviewCommentUpdateManyMutationInput;
}
