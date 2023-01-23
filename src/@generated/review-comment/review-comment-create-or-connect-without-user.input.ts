import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateWithoutUserInput } from './review-comment-create-without-user.input';

@InputType()
export class ReviewCommentCreateOrConnectWithoutUserInput {

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentWhereUniqueInput)
    where!: ReviewCommentWhereUniqueInput;

    @Field(() => ReviewCommentCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCommentCreateWithoutUserInput)
    create!: ReviewCommentCreateWithoutUserInput;
}
