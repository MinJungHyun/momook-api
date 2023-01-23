import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    point = "point",
    createdAt = "createdAt",
    deletedAt = "deletedAt",
    updatedAt = "updatedAt",
    placeId = "placeId",
    userId = "userId"
}


registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })
