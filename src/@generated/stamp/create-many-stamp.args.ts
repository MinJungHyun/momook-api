import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StampCreateManyInput } from './stamp-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStampArgs {

    @Field(() => [StampCreateManyInput], {nullable:false})
    @Type(() => StampCreateManyInput)
    data!: Array<StampCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
