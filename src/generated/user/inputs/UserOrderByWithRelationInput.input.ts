import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { PostOrderByRelationAggregateInput } from "../../post/inputs/PostOrderByRelationAggregateInput.input";

@NestJsGraphQL.InputType('UserOrderByWithRelationInput', { isAbstract: true })
export class UserOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PostOrderByRelationAggregateInput, { nullable: true })
  posts?: PostOrderByRelationAggregateInput | undefined;
}
