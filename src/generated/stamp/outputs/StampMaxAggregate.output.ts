import * as NestJsGraphQL from "@nestjs/graphql";
import { ErrorType, MealType } from "@prisma/client";

@NestJsGraphQL.ObjectType('StampMaxAggregate', { isAbstract: true })
export class StampMaxAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  count!: string | null;

  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  mealType!: "breakfast" | "lunch" | "dinner" | "night" | null;

  @NestJsGraphQL.Field(() => ErrorType, { nullable: true })
  errorType!: "notFound" | "alreadyExists" | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  placeId!: number | null;
}