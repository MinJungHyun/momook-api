import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereInput } from './review-comment-mood-where.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodOrderByWithRelationInput } from './review-comment-mood-order-by-with-relation.input';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCommentMoodScalarFieldEnum } from './review-comment-mood-scalar-field.enum';

@ArgsType()
export class FindFirstReviewCommentMoodArgs {

    @Field(() => ReviewCommentMoodWhereInput, {nullable:true})
    @Type(() => ReviewCommentMoodWhereInput)
    where?: ReviewCommentMoodWhereInput;

    @Field(() => [ReviewCommentMoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCommentMoodOrderByWithRelationInput>;

    @Field(() => ReviewCommentMoodWhereUniqueInput, {nullable:true})
    cursor?: ReviewCommentMoodWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewCommentMoodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewCommentMoodScalarFieldEnum>;
}
