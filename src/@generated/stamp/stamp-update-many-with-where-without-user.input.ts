import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampScalarWhereInput } from './stamp-scalar-where.input';
import { Type } from 'class-transformer';
import { StampUpdateManyMutationInput } from './stamp-update-many-mutation.input';

@InputType()
export class StampUpdateManyWithWhereWithoutUserInput {

    @Field(() => StampScalarWhereInput, {nullable:false})
    @Type(() => StampScalarWhereInput)
    where!: StampScalarWhereInput;

    @Field(() => StampUpdateManyMutationInput, {nullable:false})
    @Type(() => StampUpdateManyMutationInput)
    data!: StampUpdateManyMutationInput;
}
