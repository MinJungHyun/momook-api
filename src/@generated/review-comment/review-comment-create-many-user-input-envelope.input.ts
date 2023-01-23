import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentCreateManyUserInput } from './review-comment-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCommentCreateManyUserInputEnvelope {

    @Field(() => [ReviewCommentCreateManyUserInput], {nullable:false})
    @Type(() => ReviewCommentCreateManyUserInput)
    data!: Array<ReviewCommentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
