import * as NestJsGraphQL from "@nestjs/graphql";

export enum MealType {
  breakfast = "breakfast",
  lunch = "lunch",
  dinner = "dinner",
  night = "night"
}
NestJsGraphQL.registerEnumType(MealType, {
  name: "MealType",
  description: undefined,
});
