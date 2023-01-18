import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { PlaceResolver } from './place.resolver'
import { PlaceService } from './place.service'

@Module({
  providers: [PlaceResolver, PlaceService, PrismaService]
})
export class PlaceModule { }

