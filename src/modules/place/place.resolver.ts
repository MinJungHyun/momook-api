import {
  AggregatePlace,
  CreateOnePlaceArgs,
  CreateManyPlaceArgs,
  DeleteOnePlaceArgs,
  DeleteManyPlaceArgs,
  FindFirstPlaceOrThrowArgs,
  FindManyPlaceArgs,
  FindUniquePlaceArgs,
  Place,
  PlaceAggregateArgs,
  PlaceGroupBy,
  PlaceGroupByArgs,
  UpdateManyPlaceArgs,
  UpdateOnePlaceArgs,
  UpsertOnePlaceArgs
} from '@generated';
import { AffectedRows } from '@generated/prisma/affected-rows.output';
import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { PlaceService } from './place.service';

@Resolver(() => Place)
export class PlaceResolver {
  constructor(private readonly placeService: PlaceService) {}

  @Query(() => Place, { nullable: false })
  findFirstPlace(@Args() args: FindFirstPlaceOrThrowArgs) {
    return this.placeService.findFirst(args);
  }

  @Query(() => Place, { nullable: false })
  findUniquePlace(@Args() args: FindUniquePlaceArgs) {
    return this.placeService.findUnique(args);
  }

  @Query(() => [Place], { nullable: false })
  findManyPlace(@Args() args: FindManyPlaceArgs) {
    return this.placeService.findMany(args);
  }

  @Query(() => AggregatePlace, { nullable: false })
  aggregatePlace(@Args() args: PlaceAggregateArgs) {
    return this.placeService.aggregate(args);
  }

  @Query(() => [PlaceGroupBy], { nullable: false })
  groupByPlace(@Args() args: PlaceGroupByArgs) {
    return this.placeService.groupBy(args);
  }

  @Mutation(() => Place, { nullable: true })
  createPlace(@Args() args: CreateOnePlaceArgs) {
    return this.placeService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyPlace(@Args() args: CreateManyPlaceArgs) {
    return this.placeService.createMany(args);
  }

  @Mutation(() => Place, { nullable: true })
  updatePlace(@Args() args: UpdateOnePlaceArgs) {
    return this.placeService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyPlace(@Args() args: UpdateManyPlaceArgs) {
    return this.placeService.updateMany(args);
  }

  @Mutation(() => Place, { nullable: true })
  upsertPlace(@Args() args: UpsertOnePlaceArgs) {
    return this.placeService.upsert(args);
  }

  @Mutation(() => Place, { nullable: true })
  deletePlace(@Args() args: DeleteOnePlaceArgs) {
    return this.placeService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyPlace(@Args() args: DeleteManyPlaceArgs) {
    return this.placeService.deleteMany(args);
  }
}
