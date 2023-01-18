import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Stamp } from '../models/stamp.model'
import { AggregateStamp } from './outputs/AggregateStamp.output'
import { StampGroupBy } from './outputs/StampGroupBy.output'
import {
  AggregateStampArgs,
  CreateManyStampArgs,
  CreateOneStampArgs,
  DeleteManyStampArgs,
  DeleteOneStampArgs,
  FindFirstStampArgs,
  FindManyStampArgs,
  FindUniqueStampArgs,
  GroupByStampArgs,
  UpdateManyStampArgs,
  UpdateOneStampArgs,
  UpsertOneStampArgs
} from './stamp.args'
import { StampService } from './stamp.service'

@NestJsGraphql.Resolver(() => Stamp)
export class StampResolver {
  constructor(private readonly stampService: StampService) { }

  @NestJsGraphql.Query(() => Stamp, { nullable: false })
  findFirstStamp(@NestJsGraphql.Args() args: FindFirstStampArgs) {
    return this.stampService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Stamp, { nullable: false })
  findUniqueStamp(@NestJsGraphql.Args() args: FindUniqueStampArgs) {
    return this.stampService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Stamp], { nullable: false })
  findManyStamp(@NestJsGraphql.Args() args: FindManyStampArgs) {
    return this.stampService.findMany(args)
  }

  @NestJsGraphql.Query(() => [StampGroupBy], { nullable: false })
  groupByStamp(@NestJsGraphql.Args() args: GroupByStampArgs) {
    return this.stampService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateStamp, { nullable: false })
  aggregateStamp(@NestJsGraphql.Args() args: AggregateStampArgs) {
    return this.stampService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Stamp, { nullable: true })
  createStamp(@NestJsGraphql.Args() args: CreateOneStampArgs) {
    return this.stampService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyStamp(@NestJsGraphql.Args() args: CreateManyStampArgs) {
    return this.stampService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Stamp, { nullable: true })
  updateStamp(@NestJsGraphql.Args() args: UpdateOneStampArgs) {
    return this.stampService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyStamp(@NestJsGraphql.Args() args: UpdateManyStampArgs) {
    return this.stampService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Stamp, { nullable: true })
  upsertStamp(@NestJsGraphql.Args() args: UpsertOneStampArgs) {
    return this.stampService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Stamp, { nullable: true })
  deleteStamp(@NestJsGraphql.Args() args: DeleteOneStampArgs) {
    return this.stampService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyStamp(@NestJsGraphql.Args() args: DeleteManyStampArgs) {
    return this.stampService.deleteMany(args)
  }
}

