import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Place } from '../models/place.model'
import { AggregatePlace } from './outputs/AggregatePlace.output'
import { PlaceGroupBy } from './outputs/PlaceGroupBy.output'
import {
  AggregatePlaceArgs,
  CreateManyPlaceArgs,
  CreateOnePlaceArgs,
  DeleteManyPlaceArgs,
  DeleteOnePlaceArgs,
  FindFirstPlaceArgs,
  FindManyPlaceArgs,
  FindUniquePlaceArgs,
  GroupByPlaceArgs,
  UpdateManyPlaceArgs,
  UpdateOnePlaceArgs,
  UpsertOnePlaceArgs
} from './place.args'
import { PlaceService } from './place.service'

@NestJsGraphql.Resolver(() => Place)
export class PlaceResolver {
  constructor(private readonly placeService: PlaceService) { }

  @NestJsGraphql.Query(() => Place, { nullable: false })
  findFirstPlace(@NestJsGraphql.Args() args: FindFirstPlaceArgs) {
    return this.placeService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Place, { nullable: false })
  findUniquePlace(@NestJsGraphql.Args() args: FindUniquePlaceArgs) {
    return this.placeService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Place], { nullable: false })
  findManyPlace(@NestJsGraphql.Args() args: FindManyPlaceArgs) {
    return this.placeService.findMany(args)
  }

  @NestJsGraphql.Query(() => [PlaceGroupBy], { nullable: false })
  groupByPlace(@NestJsGraphql.Args() args: GroupByPlaceArgs) {
    return this.placeService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregatePlace, { nullable: false })
  aggregatePlace(@NestJsGraphql.Args() args: AggregatePlaceArgs) {
    return this.placeService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Place, { nullable: true })
  createPlace(@NestJsGraphql.Args() args: CreateOnePlaceArgs) {
    return this.placeService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyPlace(@NestJsGraphql.Args() args: CreateManyPlaceArgs) {
    return this.placeService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Place, { nullable: true })
  updatePlace(@NestJsGraphql.Args() args: UpdateOnePlaceArgs) {
    return this.placeService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyPlace(@NestJsGraphql.Args() args: UpdateManyPlaceArgs) {
    return this.placeService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Place, { nullable: true })
  upsertPlace(@NestJsGraphql.Args() args: UpsertOnePlaceArgs) {
    return this.placeService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Place, { nullable: true })
  deletePlace(@NestJsGraphql.Args() args: DeleteOnePlaceArgs) {
    return this.placeService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyPlace(@NestJsGraphql.Args() args: DeleteManyPlaceArgs) {
    return this.placeService.deleteMany(args)
  }
}

