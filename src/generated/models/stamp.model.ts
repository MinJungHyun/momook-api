import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType } from "../enums/ErrorType.enum";
import { MealType } from "../enums/MealType.enum";
import { Place } from "../models/place.model";

@NestJsGraphQL.ObjectType('Stamp', { isAbstract: true })
export class Stamp {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  count!: string;

  @NestJsGraphQL.Field(() => MealType)
  mealType!: "breakfast" | "lunch" | "dinner" | "night";

  @NestJsGraphQL.Field(() => ErrorType)
  errorType!: "notFound" | "alreadyExists";

  place?: Place | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  placeId?: number | null;
}
