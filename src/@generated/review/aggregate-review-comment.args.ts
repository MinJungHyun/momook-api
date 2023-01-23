import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentWhereInput } from '../review-comment/review-comment-where.input';
import { Type } from 'class-transformer';
import { ReviewCommentOrderByWithRelationInput } from '../review-comment/review-comment-order-by-with-relation.input';
import { ReviewCommentWhereUniqueInput } from '../review-comment/review-comment-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateReviewCommentArgs {

    @Field(() => ReviewCommentWhereInput, {nullable:true})
    @Type(() => ReviewCommentWhereInput)
    where?: ReviewCommentWhereInput;

    @Field(() => [ReviewCommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCommentOrderByWithRelationInput>;

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:true})
    cursor?: ReviewCommentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
