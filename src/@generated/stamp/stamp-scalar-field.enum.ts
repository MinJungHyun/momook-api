import { registerEnumType } from '@nestjs/graphql';

export enum StampScalarFieldEnum {
    id = "id",
    mealType = "mealType",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    placeId = "placeId",
    userId = "userId"
}


registerEnumType(StampScalarFieldEnum, { name: 'StampScalarFieldEnum', description: undefined })
