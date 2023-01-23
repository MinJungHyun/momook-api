import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StampUpdateManyMutationInput } from './stamp-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StampWhereInput } from './stamp-where.input';

@ArgsType()
export class UpdateManyStampArgs {

    @Field(() => StampUpdateManyMutationInput, {nullable:false})
    @Type(() => StampUpdateManyMutationInput)
    data!: StampUpdateManyMutationInput;

    @Field(() => StampWhereInput, {nullable:true})
    @Type(() => StampWhereInput)
    where?: StampWhereInput;
}
