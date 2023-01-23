import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentWhereInput } from './review-comment-where.input';

@InputType()
export class ReviewCommentListRelationFilter {

    @Field(() => ReviewCommentWhereInput, {nullable:true})
    every?: ReviewCommentWhereInput;

    @Field(() => ReviewCommentWhereInput, {nullable:true})
    some?: ReviewCommentWhereInput;

    @Field(() => ReviewCommentWhereInput, {nullable:true})
    none?: ReviewCommentWhereInput;
}
