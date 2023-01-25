import {
  CreateManyStampArgs,
  CreateOneStampArgs,
  DeleteManyStampArgs,
  DeleteOneStampArgs,
  FindFirstStampOrThrowArgs,
  FindManyStampArgs,
  FindUniqueStampArgs,
  StampAggregateArgs,
  StampGroupByArgs,
  UpdateManyStampArgs,
  UpdateOneStampArgs,
  UpsertOneStampArgs
} from '@generated';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class StampService {
  constructor(private prisma: PrismaService) {}

  async findFirst(args: FindFirstStampOrThrowArgs) {
    return await this.prisma.stamp.findFirst(args);
  }

  findUnique(args: FindUniqueStampArgs) {
    return this.prisma.stamp.findUnique(args);
  }

  findMany(args: FindManyStampArgs) {
    return this.prisma.stamp.findMany(args);
  }

  aggregate(args: StampAggregateArgs) {
    return this.prisma.stamp.aggregate(args);
  }

  groupBy(args: StampGroupByArgs) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.prisma.stamp.groupBy(args);
  }

  create(args: CreateOneStampArgs) {
    return this.prisma.stamp.create(args);
  }

  createMany(args: CreateManyStampArgs) {
    return this.prisma.stamp.createMany(args);
  }

  update(args: UpdateOneStampArgs) {
    return this.prisma.stamp.update(args);
  }

  updateMany(args: UpdateManyStampArgs) {
    return this.prisma.stamp.updateMany(args);
  }

  upsert(args: UpsertOneStampArgs) {
    return this.prisma.stamp.upsert(args);
  }

  delete(args: DeleteOneStampArgs) {
    return this.prisma.stamp.delete(args);
  }

  deleteMany(args: DeleteManyStampArgs) {
    return this.prisma.stamp.deleteMany(args);
  }
}
