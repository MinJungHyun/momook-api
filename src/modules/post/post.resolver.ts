import { Query, Resolver } from '@nestjs/graphql';
import { Post } from '@prisma/client';
import { PostDTO } from './dto/post.dto';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => [PostDTO]) // GraphQL을 위함 Post는 필수
  async posts(): Promise<Post[]> {
    return this.postService.posts({});
  }
}
