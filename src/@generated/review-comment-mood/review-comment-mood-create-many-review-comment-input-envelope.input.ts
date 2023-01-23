import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateManyReviewCommentInput } from './review-comment-mood-create-many-review-comment.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCommentMoodCreateManyReviewCommentInputEnvelope {

    @Field(() => [ReviewCommentMoodCreateManyReviewCommentInput], {nullable:false})
    @Type(() => ReviewCommentMoodCreateManyReviewCommentInput)
    data!: Array<ReviewCommentMoodCreateManyReviewCommentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
