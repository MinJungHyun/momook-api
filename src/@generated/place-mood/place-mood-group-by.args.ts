import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceMoodWhereInput } from './place-mood-where.input';
import { Type } from 'class-transformer';
import { PlaceMoodOrderByWithAggregationInput } from './place-mood-order-by-with-aggregation.input';
import { PlaceMoodScalarFieldEnum } from './place-mood-scalar-field.enum';
import { PlaceMoodScalarWhereWithAggregatesInput } from './place-mood-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PlaceMoodCountAggregateInput } from './place-mood-count-aggregate.input';
import { PlaceMoodAvgAggregateInput } from './place-mood-avg-aggregate.input';
import { PlaceMoodSumAggregateInput } from './place-mood-sum-aggregate.input';
import { PlaceMoodMinAggregateInput } from './place-mood-min-aggregate.input';
import { PlaceMoodMaxAggregateInput } from './place-mood-max-aggregate.input';

@ArgsType()
export class PlaceMoodGroupByArgs {

    @Field(() => PlaceMoodWhereInput, {nullable:true})
    @Type(() => PlaceMoodWhereInput)
    where?: PlaceMoodWhereInput;

    @Field(() => [PlaceMoodOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PlaceMoodOrderByWithAggregationInput>;

    @Field(() => [PlaceMoodScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PlaceMoodScalarFieldEnum>;

    @Field(() => PlaceMoodScalarWhereWithAggregatesInput, {nullable:true})
    having?: PlaceMoodScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlaceMoodCountAggregateInput, {nullable:true})
    _count?: PlaceMoodCountAggregateInput;

    @Field(() => PlaceMoodAvgAggregateInput, {nullable:true})
    _avg?: PlaceMoodAvgAggregateInput;

    @Field(() => PlaceMoodSumAggregateInput, {nullable:true})
    _sum?: PlaceMoodSumAggregateInput;

    @Field(() => PlaceMoodMinAggregateInput, {nullable:true})
    _min?: PlaceMoodMinAggregateInput;

    @Field(() => PlaceMoodMaxAggregateInput, {nullable:true})
    _max?: PlaceMoodMaxAggregateInput;
}
