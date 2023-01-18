import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType, MealType } from "../../common/enums";

@NestJsGraphQL.InputType('StampCreateManyInput', { isAbstract: true })
export class StampCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  count!: string;

  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  mealType?: "breakfast" | "lunch" | "dinner" | "night" | undefined;

  @NestJsGraphQL.Field(() => ErrorType, { nullable: true })
  errorType?: "notFound" | "alreadyExists" | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  placeId?: number | undefined;
}
