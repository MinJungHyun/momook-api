import * as NestJsGraphQL from "@nestjs/graphql";
import { PlaceAvgAggregate } from "../../common/outputs/PlaceAvgAggregate.output";
import { PlaceSumAggregate } from "../../common/outputs/PlaceSumAggregate.output";
import { PlaceCountAggregate } from "./PlaceCountAggregate.output";
import { PlaceMaxAggregate } from "./PlaceMaxAggregate.output";
import { PlaceMinAggregate } from "./PlaceMinAggregate.output";

@NestJsGraphQL.ObjectType('AggregatePlace', { isAbstract: true })
export class AggregatePlace {
  @NestJsGraphQL.Field(() => PlaceCountAggregate, { nullable: true })
  _count!: PlaceCountAggregate | null;

  @NestJsGraphQL.Field(() => PlaceAvgAggregate, { nullable: true })
  _avg!: PlaceAvgAggregate | null;

  @NestJsGraphQL.Field(() => PlaceSumAggregate, { nullable: true })
  _sum!: PlaceSumAggregate | null;

  @NestJsGraphQL.Field(() => PlaceMinAggregate, { nullable: true })
  _min!: PlaceMinAggregate | null;

  @NestJsGraphQL.Field(() => PlaceMaxAggregate, { nullable: true })
  _max!: PlaceMaxAggregate | null;
}
