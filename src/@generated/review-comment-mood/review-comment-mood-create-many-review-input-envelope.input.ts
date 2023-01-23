import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateManyReviewInput } from './review-comment-mood-create-many-review.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCommentMoodCreateManyReviewInputEnvelope {

    @Field(() => [ReviewCommentMoodCreateManyReviewInput], {nullable:false})
    @Type(() => ReviewCommentMoodCreateManyReviewInput)
    data!: Array<ReviewCommentMoodCreateManyReviewInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
