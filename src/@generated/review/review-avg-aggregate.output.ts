import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ReviewAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    point?: number;

    @Field(() => Float, {nullable:true})
    placeId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;
}
