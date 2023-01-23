import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlaceRelationFilter } from '../place/place-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class PlaceMoodWhereInput {

    @Field(() => [PlaceMoodWhereInput], {nullable:true})
    AND?: Array<PlaceMoodWhereInput>;

    @Field(() => [PlaceMoodWhereInput], {nullable:true})
    OR?: Array<PlaceMoodWhereInput>;

    @Field(() => [PlaceMoodWhereInput], {nullable:true})
    NOT?: Array<PlaceMoodWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    status?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PlaceRelationFilter, {nullable:true})
    place?: PlaceRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    placeId?: IntNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
