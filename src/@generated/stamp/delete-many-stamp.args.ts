import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StampWhereInput } from './stamp-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStampArgs {

    @Field(() => StampWhereInput, {nullable:true})
    @Type(() => StampWhereInput)
    where?: StampWhereInput;
}
