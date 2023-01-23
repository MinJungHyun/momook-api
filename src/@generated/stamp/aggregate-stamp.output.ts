import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StampCountAggregate } from './stamp-count-aggregate.output';
import { StampAvgAggregate } from './stamp-avg-aggregate.output';
import { StampSumAggregate } from './stamp-sum-aggregate.output';
import { StampMinAggregate } from './stamp-min-aggregate.output';
import { StampMaxAggregate } from './stamp-max-aggregate.output';

@ObjectType()
export class AggregateStamp {

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
