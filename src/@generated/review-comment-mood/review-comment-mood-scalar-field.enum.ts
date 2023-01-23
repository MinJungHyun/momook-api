import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCommentMoodScalarFieldEnum {
    id = "id",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    placeId = "placeId",
    reviewCommentId = "reviewCommentId",
    reviewId = "reviewId",
    userId = "userId"
}


registerEnumType(ReviewCommentMoodScalarFieldEnum, { name: 'ReviewCommentMoodScalarFieldEnum', description: undefined })
