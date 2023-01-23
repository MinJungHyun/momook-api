import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceMoodWhereInput } from './place-mood-where.input';
import { Type } from 'class-transformer';
import { PlaceMoodOrderByWithRelationInput } from './place-mood-order-by-with-relation.input';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlaceMoodScalarFieldEnum } from './place-mood-scalar-field.enum';

@ArgsType()
export class FindFirstPlaceMoodArgs {

    @Field(() => PlaceMoodWhereInput, {nullable:true})
    @Type(() => PlaceMoodWhereInput)
    where?: PlaceMoodWhereInput;

    @Field(() => [PlaceMoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlaceMoodOrderByWithRelationInput>;

    @Field(() => PlaceMoodWhereUniqueInput, {nullable:true})
    cursor?: PlaceMoodWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PlaceMoodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PlaceMoodScalarFieldEnum>;
}
