import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueReviewCommentOrThrowArgs {

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentWhereUniqueInput)
    where!: ReviewCommentWhereUniqueInput;
}
