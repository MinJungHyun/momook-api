import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampWhereUniqueInput } from './stamp-where-unique.input';
import { Type } from 'class-transformer';
import { StampCreateWithoutUserInput } from './stamp-create-without-user.input';

@InputType()
export class StampCreateOrConnectWithoutUserInput {

    @Field(() => StampWhereUniqueInput, {nullable:false})
    @Type(() => StampWhereUniqueInput)
    where!: StampWhereUniqueInput;

    @Field(() => StampCreateWithoutUserInput, {nullable:false})
    @Type(() => StampCreateWithoutUserInput)
    create!: StampCreateWithoutUserInput;
}
