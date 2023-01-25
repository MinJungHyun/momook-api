import {
  CreateManyPlaceArgs,
  CreateOnePlaceArgs,
  DeleteManyPlaceArgs,
  DeleteOnePlaceArgs,
  FindFirstPlaceOrThrowArgs,
  FindManyPlaceArgs,
  FindUniquePlaceArgs,
  PlaceAggregateArgs,
  PlaceGroupByArgs,
  UpdateManyPlaceArgs,
  UpdateOnePlaceArgs,
  UpsertOnePlaceArgs
} from '@generated';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PlaceService {
  constructor(private prisma: PrismaService) {}

  async findFirst(args: FindFirstPlaceOrThrowArgs) {
    return await this.prisma.place.findFirst(args);
  }

  findUnique(args: FindUniquePlaceArgs) {
    return this.prisma.place.findUnique(args);
  }

  findMany(args: FindManyPlaceArgs) {
    return this.prisma.place.findMany(args);
  }

  aggregate(args: PlaceAggregateArgs) {
    return this.prisma.place.aggregate(args);
  }

  groupBy(args: PlaceGroupByArgs) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.prisma.place.groupBy(args);
  }

  create(args: CreateOnePlaceArgs) {
    return this.prisma.place.create(args);
  }

  createMany(args: CreateManyPlaceArgs) {
    return this.prisma.place.createMany(args);
  }

  update(args: UpdateOnePlaceArgs) {
    return this.prisma.place.update(args);
  }

  updateMany(args: UpdateManyPlaceArgs) {
    return this.prisma.place.updateMany(args);
  }

  upsert(args: UpsertOnePlaceArgs) {
    return this.prisma.place.upsert(args);
  }

  delete(args: DeleteOnePlaceArgs) {
    return this.prisma.place.delete(args);
  }

  deleteMany(args: DeleteManyPlaceArgs) {
    return this.prisma.place.deleteMany(args);
  }
}
