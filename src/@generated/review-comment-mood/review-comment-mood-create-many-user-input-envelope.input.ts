import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateManyUserInput } from './review-comment-mood-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCommentMoodCreateManyUserInputEnvelope {

    @Field(() => [ReviewCommentMoodCreateManyUserInput], {nullable:false})
    @Type(() => ReviewCommentMoodCreateManyUserInput)
    data!: Array<ReviewCommentMoodCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
