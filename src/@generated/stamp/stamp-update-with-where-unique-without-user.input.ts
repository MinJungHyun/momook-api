import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampWhereUniqueInput } from './stamp-where-unique.input';
import { Type } from 'class-transformer';
import { StampUpdateWithoutUserInput } from './stamp-update-without-user.input';

@InputType()
export class StampUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => StampWhereUniqueInput, {nullable:false})
    @Type(() => StampWhereUniqueInput)
    where!: StampWhereUniqueInput;

    @Field(() => StampUpdateWithoutUserInput, {nullable:false})
    @Type(() => StampUpdateWithoutUserInput)
    data!: StampUpdateWithoutUserInput;
}
