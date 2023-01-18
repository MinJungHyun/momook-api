import * as NestJsGraphQL from "@nestjs/graphql";
export * from "../enums/ErrorType.enum";
export * from "../enums/Gender.enum";
export * from "../enums/MealType.enum";

export enum PlaceScalarFieldEnum {
  id = "id",
  name = "name",
  gender = "gender"
}
NestJsGraphQL.registerEnumType(PlaceScalarFieldEnum, {
  name: "PlaceScalarFieldEnum",
  description: undefined,
});

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}
NestJsGraphQL.registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined,
});

export enum StampScalarFieldEnum {
  id = "id",
  count = "count",
  mealType = "mealType",
  errorType = "errorType",
  placeId = "placeId"
}
NestJsGraphQL.registerEnumType(StampScalarFieldEnum, {
  name: "StampScalarFieldEnum",
  description: undefined,
});

export enum TransactionIsolationLevel {
  ReadUncommitted = "ReadUncommitted",
  ReadCommitted = "ReadCommitted",
  RepeatableRead = "RepeatableRead",
  Serializable = "Serializable"
}
NestJsGraphQL.registerEnumType(TransactionIsolationLevel, {
  name: "TransactionIsolationLevel",
  description: undefined,
});
