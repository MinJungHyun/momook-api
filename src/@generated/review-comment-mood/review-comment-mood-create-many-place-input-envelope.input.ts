import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateManyPlaceInput } from './review-comment-mood-create-many-place.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCommentMoodCreateManyPlaceInputEnvelope {

    @Field(() => [ReviewCommentMoodCreateManyPlaceInput], {nullable:false})
    @Type(() => ReviewCommentMoodCreateManyPlaceInput)
    data!: Array<ReviewCommentMoodCreateManyPlaceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
