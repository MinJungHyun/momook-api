import * as NestJsGraphQL from "@nestjs/graphql";
import { StampAvgAggregate } from "../../common/outputs/StampAvgAggregate.output";
import { StampSumAggregate } from "../../common/outputs/StampSumAggregate.output";
import { StampCountAggregate } from "./StampCountAggregate.output";
import { StampMaxAggregate } from "./StampMaxAggregate.output";
import { StampMinAggregate } from "./StampMinAggregate.output";

@NestJsGraphQL.ObjectType('AggregateStamp', { isAbstract: true })
export class AggregateStamp {
  @NestJsGraphQL.Field(() => StampCountAggregate, { nullable: true })
  _count!: StampCountAggregate | null;

  @NestJsGraphQL.Field(() => StampAvgAggregate, { nullable: true })
  _avg!: StampAvgAggregate | null;

  @NestJsGraphQL.Field(() => StampSumAggregate, { nullable: true })
  _sum!: StampSumAggregate | null;

  @NestJsGraphQL.Field(() => StampMinAggregate, { nullable: true })
  _min!: StampMinAggregate | null;

  @NestJsGraphQL.Field(() => StampMaxAggregate, { nullable: true })
  _max!: StampMaxAggregate | null;
}
