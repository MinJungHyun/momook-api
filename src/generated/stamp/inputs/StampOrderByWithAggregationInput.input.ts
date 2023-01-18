import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { StampAvgOrderByAggregateInput } from "../../stamp/inputs/StampAvgOrderByAggregateInput.input";
import { StampCountOrderByAggregateInput } from "../../stamp/inputs/StampCountOrderByAggregateInput.input";
import { StampMaxOrderByAggregateInput } from "../../stamp/inputs/StampMaxOrderByAggregateInput.input";
import { StampMinOrderByAggregateInput } from "../../stamp/inputs/StampMinOrderByAggregateInput.input";
import { StampSumOrderByAggregateInput } from "../../stamp/inputs/StampSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('StampOrderByWithAggregationInput', { isAbstract: true })
export class StampOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  count?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  mealType?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  errorType?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  placeId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => StampCountOrderByAggregateInput, { nullable: true })
  _count?: StampCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => StampAvgOrderByAggregateInput, { nullable: true })
  _avg?: StampAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => StampMaxOrderByAggregateInput, { nullable: true })
  _max?: StampMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => StampMinOrderByAggregateInput, { nullable: true })
  _min?: StampMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => StampSumOrderByAggregateInput, { nullable: true })
  _sum?: StampSumOrderByAggregateInput | undefined;
}
