import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { PlaceAvgOrderByAggregateInput } from "../../place/inputs/PlaceAvgOrderByAggregateInput.input";
import { PlaceCountOrderByAggregateInput } from "../../place/inputs/PlaceCountOrderByAggregateInput.input";
import { PlaceMaxOrderByAggregateInput } from "../../place/inputs/PlaceMaxOrderByAggregateInput.input";
import { PlaceMinOrderByAggregateInput } from "../../place/inputs/PlaceMinOrderByAggregateInput.input";
import { PlaceSumOrderByAggregateInput } from "../../place/inputs/PlaceSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('PlaceOrderByWithAggregationInput', { isAbstract: true })
export class PlaceOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  gender?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PlaceCountOrderByAggregateInput, { nullable: true })
  _count?: PlaceCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PlaceAvgOrderByAggregateInput, { nullable: true })
  _avg?: PlaceAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PlaceMaxOrderByAggregateInput, { nullable: true })
  _max?: PlaceMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PlaceMinOrderByAggregateInput, { nullable: true })
  _min?: PlaceMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PlaceSumOrderByAggregateInput, { nullable: true })
  _sum?: PlaceSumOrderByAggregateInput | undefined;
}
