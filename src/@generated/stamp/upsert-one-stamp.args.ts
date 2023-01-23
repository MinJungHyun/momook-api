import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StampWhereUniqueInput } from './stamp-where-unique.input';
import { Type } from 'class-transformer';
import { StampCreateInput } from './stamp-create.input';
import { StampUpdateInput } from './stamp-update.input';

@ArgsType()
export class UpsertOneStampArgs {

    @Field(() => StampWhereUniqueInput, {nullable:false})
    @Type(() => StampWhereUniqueInput)
    where!: StampWhereUniqueInput;

    @Field(() => StampCreateInput, {nullable:false})
    @Type(() => StampCreateInput)
    create!: StampCreateInput;

    @Field(() => StampUpdateInput, {nullable:false})
    @Type(() => StampUpdateInput)
    update!: StampUpdateInput;
}
