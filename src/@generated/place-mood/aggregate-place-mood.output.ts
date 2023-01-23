import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlaceMoodCountAggregate } from './place-mood-count-aggregate.output';
import { PlaceMoodAvgAggregate } from './place-mood-avg-aggregate.output';
import { PlaceMoodSumAggregate } from './place-mood-sum-aggregate.output';
import { PlaceMoodMinAggregate } from './place-mood-min-aggregate.output';
import { PlaceMoodMaxAggregate } from './place-mood-max-aggregate.output';

@ObjectType()
export class AggregatePlaceMood {

    @Field(() => PlaceMoodCountAggregate, {nullable:true})
    _count?: PlaceMoodCountAggregate;

    @Field(() => PlaceMoodAvgAggregate, {nullable:true})
    _avg?: PlaceMoodAvgAggregate;

    @Field(() => PlaceMoodSumAggregate, {nullable:true})
    _sum?: PlaceMoodSumAggregate;

    @Field(() => PlaceMoodMinAggregate, {nullable:true})
    _min?: PlaceMoodMinAggregate;

    @Field(() => PlaceMoodMaxAggregate, {nullable:true})
    _max?: PlaceMoodMaxAggregate;
}
