import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodWhereInput } from './place-mood-where.input';

@InputType()
export class PlaceMoodListRelationFilter {

    @Field(() => PlaceMoodWhereInput, {nullable:true})
    every?: PlaceMoodWhereInput;

    @Field(() => PlaceMoodWhereInput, {nullable:true})
    some?: PlaceMoodWhereInput;

    @Field(() => PlaceMoodWhereInput, {nullable:true})
    none?: PlaceMoodWhereInput;
}
