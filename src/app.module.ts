import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PlaceModule } from "./generated/place/place.module";
// import { PlaceMoodModule } from "./generated/placeMood/placeMood.module";
// import { ReviewModule } from "./generated/review/review.module";
// import { ReviewMoodModule } from "./generated/reviewMood/reviewMood.module";
// import { ReviewCommentModule } from "./generated/reviewComment/reviewComment.module";
// import { ReviewCommentMoodModule } from "./generated/reviewCommentMood/reviewCommentMood.module";
import { StampModule } from "./generated/Stamp/Stamp.module";
// import { UserModule } from "./generated/User/User.module";

@Module({
  //
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      sortSchema: true,
      autoSchemaFile: true
    }),
    PlaceModule,
    // PlaceMoodModule,
    // ReviewModule,
    // ReviewMoodModule,
    // ReviewCommentModule,
    // ReviewCommentMoodModule,
    StampModule
    // UserModule
  ],
  providers: []
})
export class AppModule {}
