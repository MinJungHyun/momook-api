import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ReviewModule } from './modules/review/review.module';
import { ReviewCommentModule } from './modules/review-comment/review-comment.module';
import { StampModule } from './modules/stamp/stamp.module';
import { PlaceModule } from './modules/place/place.module';
import { PlaceMoodModule } from './modules/place-mood/place-mood.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      sortSchema: true,
      autoSchemaFile: true
    }),
    PlaceModule,
    PlaceMoodModule,
    StampModule,
    ReviewModule,
    ReviewCommentModule
  ],
  providers: []
})
export class AppModule {}
