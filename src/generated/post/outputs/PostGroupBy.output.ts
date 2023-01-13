import * as NestJsGraphQL from "@nestjs/graphql";
import { PostAvgAggregate } from "../../common/outputs/PostAvgAggregate.output";
import { PostSumAggregate } from "../../common/outputs/PostSumAggregate.output";
import { PostCountAggregate } from "./PostCountAggregate.output";
import { PostMaxAggregate } from "./PostMaxAggregate.output";
import { PostMinAggregate } from "./PostMinAggregate.output";

@NestJsGraphQL.ObjectType('PostGroupBy', { isAbstract: true })
export class PostGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content!: string | null;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published!: boolean | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  authorId!: number | null;

  @NestJsGraphQL.Field(() => PostCountAggregate, { nullable: true })
  _count!: PostCountAggregate | null;

  @NestJsGraphQL.Field(() => PostAvgAggregate, { nullable: true })
  _avg!: PostAvgAggregate | null;

  @NestJsGraphQL.Field(() => PostSumAggregate, { nullable: true })
  _sum!: PostSumAggregate | null;

  @NestJsGraphQL.Field(() => PostMinAggregate, { nullable: true })
  _min!: PostMinAggregate | null;

  @NestJsGraphQL.Field(() => PostMaxAggregate, { nullable: true })
  _max!: PostMaxAggregate | null;
}
