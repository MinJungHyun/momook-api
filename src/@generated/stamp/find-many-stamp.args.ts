import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StampWhereInput } from './stamp-where.input';
import { Type } from 'class-transformer';
import { StampOrderByWithRelationInput } from './stamp-order-by-with-relation.input';
import { StampWhereUniqueInput } from './stamp-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StampScalarFieldEnum } from './stamp-scalar-field.enum';

@ArgsType()
export class FindManyStampArgs {

    @Field(() => StampWhereInput, {nullable:true})
    @Type(() => StampWhereInput)
    where?: StampWhereInput;

    @Field(() => [StampOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StampOrderByWithRelationInput>;

    @Field(() => StampWhereUniqueInput, {nullable:true})
    cursor?: StampWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StampScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StampScalarFieldEnum>;
}
