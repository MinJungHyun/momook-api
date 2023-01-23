import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampWhereInput } from './stamp-where.input';

@InputType()
export class StampListRelationFilter {

    @Field(() => StampWhereInput, {nullable:true})
    every?: StampWhereInput;

    @Field(() => StampWhereInput, {nullable:true})
    some?: StampWhereInput;

    @Field(() => StampWhereInput, {nullable:true})
    none?: StampWhereInput;
}
