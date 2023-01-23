import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCommentScalarFieldEnum {
    id = "id",
    content = "content",
    createdAt = "createdAt",
    deletedAt = "deletedAt",
    updatedAt = "updatedAt",
    placeId = "placeId",
    reviewId = "reviewId",
    userId = "userId"
}


registerEnumType(ReviewCommentScalarFieldEnum, { name: 'ReviewCommentScalarFieldEnum', description: undefined })
