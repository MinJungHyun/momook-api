import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { ReviewCommentResolver } from './review-comment.resolver';
import { ReviewCommentService } from './review-comment.service';

@Module({
  providers: [ReviewCommentResolver, ReviewCommentService, PrismaService]
})
export class ReviewCommentModule {}
