import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealType } from '../prisma/meal-type.enum';
import { StampCountAggregate } from './stamp-count-aggregate.output';
import { StampAvgAggregate } from './stamp-avg-aggregate.output';
import { StampSumAggregate } from './stamp-sum-aggregate.output';
import { StampMinAggregate } from './stamp-min-aggregate.output';
import { StampMaxAggregate } from './stamp-max-aggregate.output';

@ObjectType()
export class StampGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => MealType, {nullable:false})
    mealType!: keyof typeof MealType;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    placeId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => StampCountAggregate, {nullable:true})
    _count?: StampCountAggregate;

    @Field(() => StampAvgAggregate, {nullable:true})
    _avg?: StampAvgAggregate;

    @Field(() => StampSumAggregate, {nullable:true})
    _sum?: StampSumAggregate;

    @Field(() => StampMinAggregate, {nullable:true})
    _min?: StampMinAggregate;

    @Field(() => StampMaxAggregate, {nullable:true})
    _max?: StampMaxAggregate;
}
