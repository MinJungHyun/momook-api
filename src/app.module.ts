import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StampModule } from './modules/stamp/stamp.module';
// import { PlaceModule } from "./generated/place/place.module";
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      sortSchema: true,
      autoSchemaFile: true
    }),
    // PlaceModule
    StampModule
  ],
  providers: []
})
export class AppModule {}
