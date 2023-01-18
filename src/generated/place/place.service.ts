import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../../prisma.service'

@Injectable()
export class PlaceService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.PlaceFindFirstArgs) {
    return await this.prisma.place.findFirst(args)
  }

  findUnique(args: Prisma.PlaceFindUniqueArgs) {
    return this.prisma.place.findUnique(args)
  }

  findMany(args: Prisma.PlaceFindManyArgs) {
    return this.prisma.place.findMany(args)
  }

  groupBy(args: Prisma.PlaceGroupByArgs) {
    // @ts-ignore
    return this.prisma.place.groupBy(args)
  }

  aggregate(args: Prisma.PlaceAggregateArgs) {
    return this.prisma.place.aggregate(args)
  }

  create(args: Prisma.PlaceCreateArgs) {
    return this.prisma.place.create(args)
  }

  createMany(args: Prisma.PlaceCreateManyArgs) {
    return this.prisma.place.createMany(args)
  }

  update(args: Prisma.PlaceUpdateArgs) {
    return this.prisma.place.update(args)
  }

  updateMany(args: Prisma.PlaceUpdateManyArgs) {
    return this.prisma.place.updateMany(args)
  }

  upsert(args: Prisma.PlaceUpsertArgs) {
    return this.prisma.place.upsert(args)
  }

  delete(args: Prisma.PlaceDeleteArgs) {
    return this.prisma.place.delete(args)
  }

  deleteMany(args: Prisma.PlaceDeleteManyArgs) {
    return this.prisma.place.deleteMany(args)
  }
}
