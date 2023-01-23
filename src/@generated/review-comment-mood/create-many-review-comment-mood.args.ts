import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateManyInput } from './review-comment-mood-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReviewCommentMoodArgs {

    @Field(() => [ReviewCommentMoodCreateManyInput], {nullable:false})
    @Type(() => ReviewCommentMoodCreateManyInput)
    data!: Array<ReviewCommentMoodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
