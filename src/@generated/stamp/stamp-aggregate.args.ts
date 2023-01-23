import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StampWhereInput } from './stamp-where.input';
import { Type } from 'class-transformer';
import { StampOrderByWithRelationInput } from './stamp-order-by-with-relation.input';
import { StampWhereUniqueInput } from './stamp-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StampCountAggregateInput } from './stamp-count-aggregate.input';
import { StampAvgAggregateInput } from './stamp-avg-aggregate.input';
import { StampSumAggregateInput } from './stamp-sum-aggregate.input';
import { StampMinAggregateInput } from './stamp-min-aggregate.input';
import { StampMaxAggregateInput } from './stamp-max-aggregate.input';

@ArgsType()
export class StampAggregateArgs {

    @Field(() => StampWhereInput, {nullable:true})
    @Type(() => StampWhereInput)
    where?: StampWhereInput;

    @Field(() => [StampOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StampOrderByWithRelationInput>;

    @Field(() => StampWhereUniqueInput, {nullable:true})
    cursor?: StampWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StampCountAggregateInput, {nullable:true})
    _count?: StampCountAggregateInput;

    @Field(() => StampAvgAggregateInput, {nullable:true})
    _avg?: StampAvgAggregateInput;

    @Field(() => StampSumAggregateInput, {nullable:true})
    _sum?: StampSumAggregateInput;

    @Field(() => StampMinAggregateInput, {nullable:true})
    _min?: StampMinAggregateInput;

    @Field(() => StampMaxAggregateInput, {nullable:true})
    _max?: StampMaxAggregateInput;
}
