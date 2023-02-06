import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { KakaoPlaceService } from './modules/external-api/kakao-place.service';
import { KakaoApiServiceBase } from './modules/external-api/kakao.api.service';
import { PlaceMoodModule } from './modules/place-mood/place-mood.module';
import { PlaceModule } from './modules/place/place.module';
import { ReviewCommentModule } from './modules/review-comment/review-comment.module';
import { ReviewModule } from './modules/review/review.module';
import { StampModule } from './modules/stamp/stamp.module';
import { HttpModule, HttpService } from '@nestjs/axios';
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
    ReviewCommentModule,
    HttpModule
  ],
  providers: [KakaoPlaceService],
  controllers: [AppController]
})
export class AppModule {}
