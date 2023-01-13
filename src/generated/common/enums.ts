import * as NestJsGraphQL from "@nestjs/graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  name = "name"
}
NestJsGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});

export enum PostScalarFieldEnum {
  id = "id",
  title = "title",
  content = "content",
  published = "published",
  authorId = "authorId"
}
NestJsGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
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
