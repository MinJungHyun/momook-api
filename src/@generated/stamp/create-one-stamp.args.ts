import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StampCreateInput } from './stamp-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStampArgs {

    @Field(() => StampCreateInput, {nullable:false})
    @Type(() => StampCreateInput)
    data!: StampCreateInput;
}
