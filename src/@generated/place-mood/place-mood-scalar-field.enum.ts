import { registerEnumType } from '@nestjs/graphql';

export enum PlaceMoodScalarFieldEnum {
    id = "id",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    placeId = "placeId",
    userId = "userId"
}


registerEnumType(PlaceMoodScalarFieldEnum, { name: 'PlaceMoodScalarFieldEnum', description: undefined })
