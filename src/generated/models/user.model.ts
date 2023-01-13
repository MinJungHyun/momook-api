import * as NestJsGraphQL from "@nestjs/graphql";
import { Post } from "../models/post.model";
import { UserCount } from "../user/outputs/UserCount.output";

@NestJsGraphQL.ObjectType('User', { isAbstract: true })
export class User {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name?: string | null;

  posts?: Post[];

  @NestJsGraphQL.Field(() => UserCount, { nullable: true })
  _count?: UserCount | null;
}
