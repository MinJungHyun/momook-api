import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ReviewMoodAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    status?: number;

    @Field(() => Float, {nullable:true})
    placeId?: number;

    @Field(() => Float, {nullable:true})
    reviewId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;
}
