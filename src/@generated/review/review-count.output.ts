import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewCount {

    @Field(() => Int, {nullable:false})
    reviewComments?: number;

    @Field(() => Int, {nullable:false})
    reviewMoods?: number;

    @Field(() => Int, {nullable:false})
    ReviewCommentMood?: number;
}
