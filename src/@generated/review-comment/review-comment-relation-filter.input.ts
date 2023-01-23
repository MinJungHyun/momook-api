import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentWhereInput } from './review-comment-where.input';

@InputType()
export class ReviewCommentRelationFilter {

    @Field(() => ReviewCommentWhereInput, {nullable:true})
    is?: ReviewCommentWhereInput;

    @Field(() => ReviewCommentWhereInput, {nullable:true})
    isNot?: ReviewCommentWhereInput;
}
