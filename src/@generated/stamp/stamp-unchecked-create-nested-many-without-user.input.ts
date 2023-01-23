import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampCreateWithoutUserInput } from './stamp-create-without-user.input';
import { Type } from 'class-transformer';
import { StampCreateOrConnectWithoutUserInput } from './stamp-create-or-connect-without-user.input';
import { StampCreateManyUserInputEnvelope } from './stamp-create-many-user-input-envelope.input';
import { StampWhereUniqueInput } from './stamp-where-unique.input';

@InputType()
export class StampUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [StampCreateWithoutUserInput], {nullable:true})
    @Type(() => StampCreateWithoutUserInput)
    create?: Array<StampCreateWithoutUserInput>;

    @Field(() => [StampCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => StampCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<StampCreateOrConnectWithoutUserInput>;

    @Field(() => StampCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => StampCreateManyUserInputEnvelope)
    createMany?: StampCreateManyUserInputEnvelope;

    @Field(() => [StampWhereUniqueInput], {nullable:true})
    @Type(() => StampWhereUniqueInput)
    connect?: Array<StampWhereUniqueInput>;
}
