import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampCreateWithoutUserInput } from './stamp-create-without-user.input';
import { Type } from 'class-transformer';
import { StampCreateOrConnectWithoutUserInput } from './stamp-create-or-connect-without-user.input';
import { StampUpsertWithWhereUniqueWithoutUserInput } from './stamp-upsert-with-where-unique-without-user.input';
import { StampCreateManyUserInputEnvelope } from './stamp-create-many-user-input-envelope.input';
import { StampWhereUniqueInput } from './stamp-where-unique.input';
import { StampUpdateWithWhereUniqueWithoutUserInput } from './stamp-update-with-where-unique-without-user.input';
import { StampUpdateManyWithWhereWithoutUserInput } from './stamp-update-many-with-where-without-user.input';
import { StampScalarWhereInput } from './stamp-scalar-where.input';

@InputType()
export class StampUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [StampCreateWithoutUserInput], {nullable:true})
    @Type(() => StampCreateWithoutUserInput)
    create?: Array<StampCreateWithoutUserInput>;

    @Field(() => [StampCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => StampCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<StampCreateOrConnectWithoutUserInput>;

    @Field(() => [StampUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => StampUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<StampUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => StampCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => StampCreateManyUserInputEnvelope)
    createMany?: StampCreateManyUserInputEnvelope;

    @Field(() => [StampWhereUniqueInput], {nullable:true})
    @Type(() => StampWhereUniqueInput)
    set?: Array<StampWhereUniqueInput>;

    @Field(() => [StampWhereUniqueInput], {nullable:true})
    @Type(() => StampWhereUniqueInput)
    disconnect?: Array<StampWhereUniqueInput>;

    @Field(() => [StampWhereUniqueInput], {nullable:true})
    @Type(() => StampWhereUniqueInput)
    delete?: Array<StampWhereUniqueInput>;

    @Field(() => [StampWhereUniqueInput], {nullable:true})
    @Type(() => StampWhereUniqueInput)
    connect?: Array<StampWhereUniqueInput>;

    @Field(() => [StampUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => StampUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<StampUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [StampUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => StampUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<StampUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [StampScalarWhereInput], {nullable:true})
    @Type(() => StampScalarWhereInput)
    deleteMany?: Array<StampScalarWhereInput>;
}
