import { CreateManyStampArgs } from '@generated/stamp/create-many-stamp.args';
import { CreateOneStampArgs } from '@generated/stamp/create-one-stamp.args';
import { DeleteManyStampArgs } from '@generated/stamp/delete-many-stamp.args';
import { DeleteOneStampArgs } from '@generated/stamp/delete-one-stamp.args';
import { FindFirstStampOrThrowArgs } from '@generated/stamp/find-first-stamp-or-throw.args';
import { FindManyStampArgs } from '@generated/stamp/find-many-stamp.args';
import { FindUniqueStampArgs } from '@generated/stamp/find-unique-stamp.args';
import { StampAggregateArgs } from '@generated/stamp/stamp-aggregate.args';
import { StampGroupByArgs } from '@generated/stamp/stamp-group-by.args';
import { UpdateManyStampArgs } from '@generated/stamp/update-many-stamp.args';
import { UpdateOneStampArgs } from '@generated/stamp/update-one-stamp.args';
import { UpsertOneStampArgs } from '@generated/stamp/upsert-one-stamp.args';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '@prisma/client';
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

  update(args: Prisma.StampUpdateArgs) {
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
