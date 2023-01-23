import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentCreateManyInput } from '../review-comment/review-comment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReviewCommentArgs {

    @Field(() => [ReviewCommentCreateManyInput], {nullable:false})
    @Type(() => ReviewCommentCreateManyInput)
    data!: Array<ReviewCommentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
