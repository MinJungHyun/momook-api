import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StampWhereUniqueInput } from './stamp-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneStampArgs {

    @Field(() => StampWhereUniqueInput, {nullable:false})
    @Type(() => StampWhereUniqueInput)
    where!: StampWhereUniqueInput;
}
