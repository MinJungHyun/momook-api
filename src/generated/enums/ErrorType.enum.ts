import * as NestJsGraphQL from "@nestjs/graphql";

export enum ErrorType {
  notFound = "notFound",
  alreadyExists = "alreadyExists"
}
NestJsGraphQL.registerEnumType(ErrorType, {
  name: "ErrorType",
  description: undefined,
});
