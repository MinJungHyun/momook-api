import {
  AggregatePlaceMood,
  CreateOnePlaceMoodArgs,
  CreateManyPlaceMoodArgs,
  DeleteOnePlaceMoodArgs,
  DeleteManyPlaceMoodArgs,
  FindFirstPlaceMoodOrThrowArgs,
  FindManyPlaceMoodArgs,
  FindUniquePlaceMoodArgs,
  PlaceMood,
  PlaceMoodAggregateArgs,
  PlaceMoodGroupBy,
  PlaceMoodGroupByArgs,
  UpdateManyPlaceMoodArgs,
  UpdateOnePlaceMoodArgs,
  UpsertOnePlaceMoodArgs
} from '@generated';
import { AffectedRows } from '@generated/prisma/affected-rows.output';
import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { PlaceMoodService } from './place-mood.service';

@Resolver(() => PlaceMood)
export class PlaceMoodResolver {
  constructor(private readonly placeMoodService: PlaceMoodService) {}

  @Query(() => PlaceMood, { nullable: false })
  findFirstPlaceMood(@Args() args: FindFirstPlaceMoodOrThrowArgs) {
    return this.placeMoodService.findFirst(args);
  }

  @Query(() => PlaceMood, { nullable: false })
  findUniquePlaceMood(@Args() args: FindUniquePlaceMoodArgs) {
    return this.placeMoodService.findUnique(args);
  }

  @Query(() => [PlaceMood], { nullable: false })
  findManyPlaceMood(@Args() args: FindManyPlaceMoodArgs) {
    return this.placeMoodService.findMany(args);
  }

  @Query(() => AggregatePlaceMood, { nullable: false })
  aggregatePlaceMood(@Args() args: PlaceMoodAggregateArgs) {
    return this.placeMoodService.aggregate(args);
  }

  @Query(() => [PlaceMoodGroupBy], { nullable: false })
  groupByPlaceMood(@Args() args: PlaceMoodGroupByArgs) {
    return this.placeMoodService.groupBy(args);
  }

  @Mutation(() => PlaceMood, { nullable: true })
  createPlaceMood(@Args() args: CreateOnePlaceMoodArgs) {
    return this.placeMoodService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyPlaceMood(@Args() args: CreateManyPlaceMoodArgs) {
    return this.placeMoodService.createMany(args);
  }

  @Mutation(() => PlaceMood, { nullable: true })
  updatePlaceMood(@Args() args: UpdateOnePlaceMoodArgs) {
    return this.placeMoodService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyPlaceMood(@Args() args: UpdateManyPlaceMoodArgs) {
    return this.placeMoodService.updateMany(args);
  }

  @Mutation(() => PlaceMood, { nullable: true })
  upsertPlaceMood(@Args() args: UpsertOnePlaceMoodArgs) {
    return this.placeMoodService.upsert(args);
  }

  @Mutation(() => PlaceMood, { nullable: true })
  deletePlaceMood(@Args() args: DeleteOnePlaceMoodArgs) {
    return this.placeMoodService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyPlaceMood(@Args() args: DeleteManyPlaceMoodArgs) {
    return this.placeMoodService.deleteMany(args);
  }
}
