import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType, MealType } from "../../common/enums";

@NestJsGraphQL.InputType('StampCreateWithoutPlaceInput', { isAbstract: true })
export class StampCreateWithoutPlaceInput {
  @NestJsGraphQL.Field(() => String)
  count!: string;

  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  mealType?: "breakfast" | "lunch" | "dinner" | "night" | undefined;

  @NestJsGraphQL.Field(() => ErrorType, { nullable: true })
  errorType?: "notFound" | "alreadyExists" | undefined;
}
