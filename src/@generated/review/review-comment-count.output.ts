import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewCommentCount {

    @Field(() => Int, {nullable:false})
    reviewCommentMoods?: number;
}
