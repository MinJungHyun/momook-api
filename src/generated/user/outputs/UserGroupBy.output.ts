import * as NestJsGraphQL from "@nestjs/graphql";
import { UserAvgAggregate } from "../../common/outputs/UserAvgAggregate.output";
import { UserSumAggregate } from "../../common/outputs/UserSumAggregate.output";
import { UserCountAggregate } from "./UserCountAggregate.output";
import { UserMaxAggregate } from "./UserMaxAggregate.output";
import { UserMinAggregate } from "./UserMinAggregate.output";

@NestJsGraphQL.ObjectType('UserGroupBy', { isAbstract: true })
export class UserGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @NestJsGraphQL.Field(() => UserCountAggregate, { nullable: true })
  _count!: UserCountAggregate | null;

  @NestJsGraphQL.Field(() => UserAvgAggregate, { nullable: true })
  _avg!: UserAvgAggregate | null;

  @NestJsGraphQL.Field(() => UserSumAggregate, { nullable: true })
  _sum!: UserSumAggregate | null;

  @NestJsGraphQL.Field(() => UserMinAggregate, { nullable: true })
  _min!: UserMinAggregate | null;

  @NestJsGraphQL.Field(() => UserMaxAggregate, { nullable: true })
  _max!: UserMaxAggregate | null;
}
