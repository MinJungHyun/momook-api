import { registerEnumType } from '@nestjs/graphql';

export enum PlaceScalarFieldEnum {
    id = "id",
    name = "name",
    lat = "lat",
    lng = "lng",
    kakaoPlaceId = "kakaoPlaceId",
    reviewCnt = "reviewCnt",
    pointAvg = "pointAvg",
    likeCnt = "likeCnt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PlaceScalarFieldEnum, { name: 'PlaceScalarFieldEnum', description: undefined })
