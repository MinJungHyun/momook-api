import * as NestJsGraphQL from "@nestjs/graphql";
import { User } from "../models/user.model";

@NestJsGraphQL.ObjectType('Post', { isAbstract: true })
export class Post {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | null;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published?: boolean | null;

  author?: User | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  authorId?: number | null;
}
