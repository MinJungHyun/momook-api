import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentCreateManyReviewInput } from './review-comment-create-many-review.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCommentCreateManyReviewInputEnvelope {

    @Field(() => [ReviewCommentCreateManyReviewInput], {nullable:false})
    @Type(() => ReviewCommentCreateManyReviewInput)
    data!: Array<ReviewCommentCreateManyReviewInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
