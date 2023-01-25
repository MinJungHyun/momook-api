import {
  CreateManyReviewArgs,
  CreateOneReviewArgs,
  DeleteManyReviewArgs,
  DeleteOneReviewArgs,
  FindFirstReviewOrThrowArgs,
  FindManyReviewArgs,
  FindUniqueReviewArgs,
  ReviewAggregateArgs,
  ReviewGroupByArgs,
  UpdateManyReviewArgs,
  UpdateOneReviewArgs,
  UpsertOneReviewArgs
} from '@generated';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async findFirst(args: FindFirstReviewOrThrowArgs) {
    return await this.prisma.review.findFirst(args);
  }

  findUnique(args: FindUniqueReviewArgs) {
    return this.prisma.review.findUnique(args);
  }

  findMany(args: FindManyReviewArgs) {
    return this.prisma.review.findMany(args);
  }

  aggregate(args: ReviewAggregateArgs) {
    return this.prisma.review.aggregate(args);
  }

  groupBy(args: ReviewGroupByArgs) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.prisma.review.groupBy(args);
  }

  create(args: CreateOneReviewArgs) {
    return this.prisma.review.create(args);
  }

  createMany(args: CreateManyReviewArgs) {
    return this.prisma.review.createMany(args);
  }

  update(args: UpdateOneReviewArgs) {
    return this.prisma.review.update(args);
  }

  updateMany(args: UpdateManyReviewArgs) {
    return this.prisma.review.updateMany(args);
  }

  upsert(args: UpsertOneReviewArgs) {
    return this.prisma.review.upsert(args);
  }

  delete(args: DeleteOneReviewArgs) {
    return this.prisma.review.delete(args);
  }

  deleteMany(args: DeleteManyReviewArgs) {
    return this.prisma.review.deleteMany(args);
  }
}
