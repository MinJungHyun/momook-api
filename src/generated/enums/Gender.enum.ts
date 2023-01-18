import * as NestJsGraphQL from "@nestjs/graphql";

export enum Gender {
  man = "man",
  woman = "woman"
}
NestJsGraphQL.registerEnumType(Gender, {
  name: "Gender",
  description: undefined,
});
