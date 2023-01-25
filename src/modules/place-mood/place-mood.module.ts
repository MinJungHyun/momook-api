import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { PlaceMoodResolver } from './place-mood.resolver';
import { PlaceMoodService } from './place-mood.service';

@Module({
  providers: [PlaceMoodResolver, PlaceMoodService, PrismaService]
})
export class PlaceMoodModule {}
