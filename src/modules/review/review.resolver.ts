import {
  AggregateReview,
  CreateManyReviewArgs,
  CreateOneReviewArgs,
  DeleteManyReviewArgs,
  DeleteOneReviewArgs,
  FindFirstReviewOrThrowArgs,
  FindManyReviewArgs,
  FindUniqueReviewArgs,
  Review,
  ReviewAggregateArgs,
  ReviewGroupBy,
  ReviewGroupByArgs,
  UpdateManyReviewArgs,
  UpdateOneReviewArgs,
  UpsertOneReviewArgs
} from '@generated';
import { AffectedRows } from '@generated/prisma/affected-rows.output';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReviewService } from './review.service';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => Review, { nullable: false })
  findFirstReview(@Args() args: FindFirstReviewOrThrowArgs) {
    return this.reviewService.findFirst(args);
  }

  @Query(() => Review, { nullable: false })
  findUniqueReview(@Args() args: FindUniqueReviewArgs) {
    return this.reviewService.findUnique(args);
  }

  @Query(() => [Review], { nullable: false })
  findManyReview(@Args() args: FindManyReviewArgs) {
    return this.reviewService.findMany(args);
  }

  @Query(() => AggregateReview, { nullable: false })
  aggregateReview(@Args() args: ReviewAggregateArgs) {
    return this.reviewService.aggregate(args);
  }

  @Query(() => [ReviewGroupBy], { nullable: false })
  groupByReview(@Args() args: ReviewGroupByArgs) {
    return this.reviewService.groupBy(args);
  }

  @Mutation(() => Review, { nullable: true })
  createReview(@Args() args: CreateOneReviewArgs) {
    return this.reviewService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyReview(@Args() args: CreateManyReviewArgs) {
    return this.reviewService.createMany(args);
  }

  @Mutation(() => Review, { nullable: true })
  updateReview(@Args() args: UpdateOneReviewArgs) {
    return this.reviewService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyReview(@Args() args: UpdateManyReviewArgs) {
    return this.reviewService.updateMany(args);
  }

  @Mutation(() => Review, { nullable: true })
  upsertReview(@Args() args: UpsertOneReviewArgs) {
    return this.reviewService.upsert(args);
  }

  @Mutation(() => Review, { nullable: true })
  deleteReview(@Args() args: DeleteOneReviewArgs) {
    return this.reviewService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyReview(@Args() args: DeleteManyReviewArgs) {
    return this.reviewService.deleteMany(args);
  }
}
