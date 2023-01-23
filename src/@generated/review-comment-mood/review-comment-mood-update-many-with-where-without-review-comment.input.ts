import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodScalarWhereInput } from './review-comment-mood-scalar-where.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodUpdateManyMutationInput } from './review-comment-mood-update-many-mutation.input';

@InputType()
export class ReviewCommentMoodUpdateManyWithWhereWithoutReviewCommentInput {

    @Field(() => ReviewCommentMoodScalarWhereInput, {nullable:false})
    @Type(() => ReviewCommentMoodScalarWhereInput)
    where!: ReviewCommentMoodScalarWhereInput;

    @Field(() => ReviewCommentMoodUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCommentMoodUpdateManyMutationInput)
    data!: ReviewCommentMoodUpdateManyMutationInput;
}
