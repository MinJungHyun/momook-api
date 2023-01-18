import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { PlaceOrderByWithRelationInput } from "../../place/inputs/PlaceOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('StampOrderByWithRelationInput', { isAbstract: true })
export class StampOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  count?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  mealType?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  errorType?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PlaceOrderByWithRelationInput, { nullable: true })
  place?: PlaceOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  placeId?: "asc" | "desc" | undefined;
}
