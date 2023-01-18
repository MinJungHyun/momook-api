import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType, MealType } from "../../common/enums";
import { PlaceCreateNestedOneWithoutStampsInput } from "../../place/inputs/PlaceCreateNestedOneWithoutStampsInput.input";

@NestJsGraphQL.InputType('StampCreateInput', { isAbstract: true })
export class StampCreateInput {
  @NestJsGraphQL.Field(() => String)
  count!: string;

  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  mealType?: "breakfast" | "lunch" | "dinner" | "night" | undefined;

  @NestJsGraphQL.Field(() => ErrorType, { nullable: true })
  errorType?: "notFound" | "alreadyExists" | undefined;

  @NestJsGraphQL.Field(() => PlaceCreateNestedOneWithoutStampsInput, { nullable: true })
  place?: PlaceCreateNestedOneWithoutStampsInput | undefined;
}
