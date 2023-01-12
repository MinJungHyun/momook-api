import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { PrismaService } from '../../prisma.service';
@Module({
  providers: [PostResolver, PostService, PrismaService]
  // exports: [PrismaService, PostService]
})
export class PostModule {}
