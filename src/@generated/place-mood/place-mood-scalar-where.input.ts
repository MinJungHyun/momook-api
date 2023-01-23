import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class PlaceMoodScalarWhereInput {

    @Field(() => [PlaceMoodScalarWhereInput], {nullable:true})
    AND?: Array<PlaceMoodScalarWhereInput>;

    @Field(() => [PlaceMoodScalarWhereInput], {nullable:true})
    OR?: Array<PlaceMoodScalarWhereInput>;

    @Field(() => [PlaceMoodScalarWhereInput], {nullable:true})
    NOT?: Array<PlaceMoodScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    status?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    placeId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
