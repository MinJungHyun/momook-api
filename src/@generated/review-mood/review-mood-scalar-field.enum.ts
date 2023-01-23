import { registerEnumType } from '@nestjs/graphql';

export enum ReviewMoodScalarFieldEnum {
    id = "id",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    placeId = "placeId",
    reviewId = "reviewId",
    userId = "userId"
}


registerEnumType(ReviewMoodScalarFieldEnum, { name: 'ReviewMoodScalarFieldEnum', description: undefined })
