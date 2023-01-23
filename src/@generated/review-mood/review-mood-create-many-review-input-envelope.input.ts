import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodCreateManyReviewInput } from './review-mood-create-many-review.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewMoodCreateManyReviewInputEnvelope {

    @Field(() => [ReviewMoodCreateManyReviewInput], {nullable:false})
    @Type(() => ReviewMoodCreateManyReviewInput)
    data!: Array<ReviewMoodCreateManyReviewInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
