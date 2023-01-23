import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { StampResolver } from './stamp.resolver';
import { StampService } from './stamp.service';

@Module({
  providers: [StampResolver, StampService, PrismaService]
})
export class StampModule {}
