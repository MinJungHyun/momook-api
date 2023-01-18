import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../../prisma.service'

@Injectable()
export class StampService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.StampFindFirstArgs) {
    return await this.prisma.stamp.findFirst(args)
  }

  findUnique(args: Prisma.StampFindUniqueArgs) {
    return this.prisma.stamp.findUnique(args)
  }

  findMany(args: Prisma.StampFindManyArgs) {
    return this.prisma.stamp.findMany(args)
  }

  groupBy(args: Prisma.StampGroupByArgs) {
    // @ts-ignore
    return this.prisma.stamp.groupBy(args)
  }

  aggregate(args: Prisma.StampAggregateArgs) {
    return this.prisma.stamp.aggregate(args)
  }

  create(args: Prisma.StampCreateArgs) {
    return this.prisma.stamp.create(args)
  }

  createMany(args: Prisma.StampCreateManyArgs) {
    return this.prisma.stamp.createMany(args)
  }

  update(args: Prisma.StampUpdateArgs) {
    return this.prisma.stamp.update(args)
  }

  updateMany(args: Prisma.StampUpdateManyArgs) {
    return this.prisma.stamp.updateMany(args)
  }

  upsert(args: Prisma.StampUpsertArgs) {
    return this.prisma.stamp.upsert(args)
  }

  delete(args: Prisma.StampDeleteArgs) {
    return this.prisma.stamp.delete(args)
  }

  deleteMany(args: Prisma.StampDeleteManyArgs) {
    return this.prisma.stamp.deleteMany(args)
  }
}
