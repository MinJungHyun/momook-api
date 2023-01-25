import {
  CreateOneReviewCommentArgs,
  CreateManyReviewCommentArgs,
  DeleteOneReviewCommentArgs,
  DeleteManyReviewCommentArgs,
  FindFirstReviewCommentOrThrowArgs,
  FindManyReviewCommentArgs,
  FindUniqueReviewCommentArgs,
  ReviewComment,
  ReviewCommentGroupBy,
  ReviewCommentGroupByArgs,
  UpdateManyReviewCommentArgs,
  UpdateOneReviewCommentArgs,
  UpsertOneReviewCommentArgs
} from '@generated';
import { AffectedRows } from '@generated/prisma/affected-rows.output';
import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { ReviewCommentService } from './review-comment.service';

@Resolver(() => ReviewComment)
export class ReviewCommentResolver {
  constructor(private readonly reviewCommentService: ReviewCommentService) {}

  @Query(() => ReviewComment, { nullable: false })
  findFirstReviewComment(@Args() args: FindFirstReviewCommentOrThrowArgs) {
    return this.reviewCommentService.findFirst(args);
  }

  @Query(() => ReviewComment, { nullable: false })
  findUniqueReviewComment(@Args() args: FindUniqueReviewCommentArgs) {
    return this.reviewCommentService.findUnique(args);
  }

  @Query(() => [ReviewComment], { nullable: false })
  findManyReviewComment(@Args() args: FindManyReviewCommentArgs) {
    return this.reviewCommentService.findMany(args);
  }

  @Query(() => [ReviewCommentGroupBy], { nullable: false })
  groupByReviewComment(@Args() args: ReviewCommentGroupByArgs) {
    return this.reviewCommentService.groupBy(args);
  }

  @Mutation(() => ReviewComment, { nullable: true })
  createReviewComment(@Args() args: CreateOneReviewCommentArgs) {
    return this.reviewCommentService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyReviewComment(@Args() args: CreateManyReviewCommentArgs) {
    return this.reviewCommentService.createMany(args);
  }

  @Mutation(() => ReviewComment, { nullable: true })
  updateReviewComment(@Args() args: UpdateOneReviewCommentArgs) {
    return this.reviewCommentService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyReviewComment(@Args() args: UpdateManyReviewCommentArgs) {
    return this.reviewCommentService.updateMany(args);
  }

  @Mutation(() => ReviewComment, { nullable: true })
  upsertReviewComment(@Args() args: UpsertOneReviewCommentArgs) {
    return this.reviewCommentService.upsert(args);
  }

  @Mutation(() => ReviewComment, { nullable: true })
  deleteReviewComment(@Args() args: DeleteOneReviewCommentArgs) {
    return this.reviewCommentService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyReviewComment(@Args() args: DeleteManyReviewCommentArgs) {
    return this.reviewCommentService.deleteMany(args);
  }
}
