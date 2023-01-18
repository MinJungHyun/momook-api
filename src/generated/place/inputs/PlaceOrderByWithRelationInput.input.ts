import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { StampOrderByRelationAggregateInput } from "../../stamp/inputs/StampOrderByRelationAggregateInput.input";

@NestJsGraphQL.InputType('PlaceOrderByWithRelationInput', { isAbstract: true })
export class PlaceOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  gender?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => StampOrderByRelationAggregateInput, { nullable: true })
  stamps?: StampOrderByRelationAggregateInput | undefined;
}
