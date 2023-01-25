import {
  CreateManyPlaceMoodArgs,
  CreateOnePlaceMoodArgs,
  DeleteManyPlaceMoodArgs,
  DeleteOnePlaceMoodArgs,
  FindFirstPlaceMoodOrThrowArgs,
  FindManyPlaceMoodArgs,
  FindUniquePlaceMoodArgs,
  PlaceMoodAggregateArgs,
  PlaceMoodGroupByArgs,
  UpdateManyPlaceMoodArgs,
  UpdateOnePlaceMoodArgs,
  UpsertOnePlaceMoodArgs
} from '@generated';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PlaceMoodService {
  constructor(private prisma: PrismaService) {}

  async findFirst(args: FindFirstPlaceMoodOrThrowArgs) {
    return await this.prisma.placeMood.findFirst(args);
  }

  findUnique(args: FindUniquePlaceMoodArgs) {
    return this.prisma.placeMood.findUnique(args);
  }

  findMany(args: FindManyPlaceMoodArgs) {
    return this.prisma.placeMood.findMany(args);
  }

  aggregate(args: PlaceMoodAggregateArgs) {
    return this.prisma.placeMood.aggregate(args);
  }

  groupBy(args: PlaceMoodGroupByArgs) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.prisma.placeMood.groupBy(args);
  }

  create(args: CreateOnePlaceMoodArgs) {
    return this.prisma.placeMood.create(args);
  }

  createMany(args: CreateManyPlaceMoodArgs) {
    return this.prisma.placeMood.createMany(args);
  }

  update(args: UpdateOnePlaceMoodArgs) {
    return this.prisma.placeMood.update(args);
  }

  updateMany(args: UpdateManyPlaceMoodArgs) {
    return this.prisma.placeMood.updateMany(args);
  }

  upsert(args: UpsertOnePlaceMoodArgs) {
    return this.prisma.placeMood.upsert(args);
  }

  delete(args: DeleteOnePlaceMoodArgs) {
    return this.prisma.placeMood.delete(args);
  }

  deleteMany(args: DeleteManyPlaceMoodArgs) {
    return this.prisma.placeMood.deleteMany(args);
  }
}
