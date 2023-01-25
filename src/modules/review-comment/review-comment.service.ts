import {
  CreateManyReviewCommentArgs,
  CreateOneReviewCommentArgs,
  DeleteManyReviewCommentArgs,
  DeleteOneReviewCommentArgs,
  FindFirstReviewCommentOrThrowArgs,
  FindManyReviewCommentArgs,
  FindUniqueReviewCommentArgs,
  ReviewCommentGroupByArgs,
  UpdateManyReviewCommentArgs,
  UpdateOneReviewCommentArgs,
  UpsertOneReviewCommentArgs
} from '@generated';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
@Injectable()
export class ReviewCommentService {
  constructor(private prisma: PrismaService) {}

  async findFirst(args: FindFirstReviewCommentOrThrowArgs) {
    return await this.prisma.reviewComment.findFirst(args);
  }

  findUnique(args: FindUniqueReviewCommentArgs) {
    return this.prisma.reviewComment.findUnique(args);
  }

  findMany(args: FindManyReviewCommentArgs) {
    return this.prisma.reviewComment.findMany(args);
  }

  groupBy(args: ReviewCommentGroupByArgs) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.prisma.reviewComment.groupBy(args);
  }

  create(args: CreateOneReviewCommentArgs) {
    return this.prisma.reviewComment.create(args);
  }

  createMany(args: CreateManyReviewCommentArgs) {
    return this.prisma.reviewComment.createMany(args);
  }

  update(args: UpdateOneReviewCommentArgs) {
    return this.prisma.reviewComment.update(args);
  }

  updateMany(args: UpdateManyReviewCommentArgs) {
    return this.prisma.reviewComment.updateMany(args);
  }

  upsert(args: UpsertOneReviewCommentArgs) {
    return this.prisma.reviewComment.upsert(args);
  }

  delete(args: DeleteOneReviewCommentArgs) {
    return this.prisma.reviewComment.delete(args);
  }

  deleteMany(args: DeleteManyReviewCommentArgs) {
    return this.prisma.reviewComment.deleteMany(args);
  }
}
