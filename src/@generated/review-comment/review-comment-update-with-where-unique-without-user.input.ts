import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentUpdateWithoutUserInput } from './review-comment-update-without-user.input';

@InputType()
export class ReviewCommentUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentWhereUniqueInput)
    where!: ReviewCommentWhereUniqueInput;

    @Field(() => ReviewCommentUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCommentUpdateWithoutUserInput)
    data!: ReviewCommentUpdateWithoutUserInput;
}
