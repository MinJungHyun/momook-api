import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampCreateManyUserInput } from './stamp-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class StampCreateManyUserInputEnvelope {

    @Field(() => [StampCreateManyUserInput], {nullable:false})
    @Type(() => StampCreateManyUserInput)
    data!: Array<StampCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
