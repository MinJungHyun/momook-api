import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodWhereInput } from './review-comment-mood-where.input';

@InputType()
export class ReviewCommentMoodListRelationFilter {

    @Field(() => ReviewCommentMoodWhereInput, {nullable:true})
    every?: ReviewCommentMoodWhereInput;

    @Field(() => ReviewCommentMoodWhereInput, {nullable:true})
    some?: ReviewCommentMoodWhereInput;

    @Field(() => ReviewCommentMoodWhereInput, {nullable:true})
    none?: ReviewCommentMoodWhereInput;
}
