import { FindUniqueStampArgs } from '@generated/stamp/find-unique-stamp.args';
import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { AffectedRows } from '@generated/prisma/affected-rows.output';
import { Stamp } from '@generated/stamp/stamp.model';
import { AggregateStamp } from '@generated/stamp/aggregate-stamp.output';
import { StampGroupBy } from '@generated/stamp/stamp-group-by.output';

import { StampService } from './stamp.service';
import { StampAggregateArgs } from '@generated/stamp/stamp-aggregate.args';
import { FindFirstStampOrThrowArgs } from '@generated/stamp/find-first-stamp-or-throw.args';
import { FindManyStampArgs } from '@generated/stamp/find-many-stamp.args';
import { CreateOneStampArgs } from '@generated/stamp/create-one-stamp.args';
import { CreateManyStampArgs } from '@generated/stamp/create-many-stamp.args';
import { UpdateOneStampArgs } from '@generated/stamp/update-one-stamp.args';
import { UpdateManyStampArgs } from '@generated/stamp/update-many-stamp.args';
import { UpsertOneStampArgs } from '@generated/stamp/upsert-one-stamp.args';
import { DeleteOneStampArgs } from '@generated/stamp/delete-one-stamp.args';
import { DeleteManyStampArgs } from '@generated/stamp/delete-many-stamp.args';
import { Prisma } from '@prisma/client';
import { StampGroupByArgs } from '@generated/stamp/stamp-group-by.args';

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
