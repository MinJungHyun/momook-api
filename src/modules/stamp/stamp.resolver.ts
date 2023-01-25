import {
  AggregateStamp,
  CreateOneStampArgs,
  CreateManyStampArgs,
  DeleteOneStampArgs,
  DeleteManyStampArgs,
  FindFirstStampOrThrowArgs,
  FindManyStampArgs,
  FindUniqueStampArgs,
  Stamp,
  StampAggregateArgs,
  StampGroupBy,
  StampGroupByArgs,
  UpdateManyStampArgs,
  UpdateOneStampArgs,
  UpsertOneStampArgs
} from '@generated';
import { AffectedRows } from '@generated/prisma/affected-rows.output';
import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { StampService } from './stamp.service';

@Resolver(() => Stamp)
export class StampResolver {
  constructor(private readonly stampService: StampService) {}

  @Query(() => Stamp, { nullable: false })
  findFirstStamp(@Args() args: FindFirstStampOrThrowArgs) {
    return this.stampService.findFirst(args);
  }

  @Query(() => Stamp, { nullable: false })
  findUniqueStamp(@Args() args: FindUniqueStampArgs) {
    return this.stampService.findUnique(args);
  }

  @Query(() => [Stamp], { nullable: false })
  findManyStamp(@Args() args: FindManyStampArgs) {
    return this.stampService.findMany(args);
  }

  @Query(() => AggregateStamp, { nullable: false })
  aggregateStamp(@Args() args: StampAggregateArgs) {
    return this.stampService.aggregate(args);
  }

  @Query(() => [StampGroupBy], { nullable: false })
  groupByStamp(@Args() args: StampGroupByArgs) {
    return this.stampService.groupBy(args);
  }

  @Mutation(() => Stamp, { nullable: true })
  createStamp(@Args() args: CreateOneStampArgs) {
    return this.stampService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyStamp(@Args() args: CreateManyStampArgs) {
    return this.stampService.createMany(args);
  }

  @Mutation(() => Stamp, { nullable: true })
  updateStamp(@Args() args: UpdateOneStampArgs) {
    return this.stampService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyStamp(@Args() args: UpdateManyStampArgs) {
    return this.stampService.updateMany(args);
  }

  @Mutation(() => Stamp, { nullable: true })
  upsertStamp(@Args() args: UpsertOneStampArgs) {
    return this.stampService.upsert(args);
  }

  @Mutation(() => Stamp, { nullable: true })
  deleteStamp(@Args() args: DeleteOneStampArgs) {
    return this.stampService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyStamp(@Args() args: DeleteManyStampArgs) {
    return this.stampService.deleteMany(args);
  }
}
