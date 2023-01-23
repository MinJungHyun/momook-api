import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlaceCount {

    @Field(() => Int, {nullable:false})
    placeMoods?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    reviewComments?: number;

    @Field(() => Int, {nullable:false})
    reviewCommentMoods?: number;

    @Field(() => Int, {nullable:false})
    reviewMoods?: number;

    @Field(() => Int, {nullable:false})
    stamps?: number;
}
