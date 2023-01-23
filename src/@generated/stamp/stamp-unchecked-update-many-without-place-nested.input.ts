import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampCreateWithoutPlaceInput } from './stamp-create-without-place.input';
import { Type } from 'class-transformer';
import { StampCreateOrConnectWithoutPlaceInput } from './stamp-create-or-connect-without-place.input';
import { StampUpsertWithWhereUniqueWithoutPlaceInput } from './stamp-upsert-with-where-unique-without-place.input';
import { StampCreateManyPlaceInputEnvelope } from './stamp-create-many-place-input-envelope.input';
import { StampWhereUniqueInput } from './stamp-where-unique.input';
import { StampUpdateWithWhereUniqueWithoutPlaceInput } from './stamp-update-with-where-unique-without-place.input';
import { StampUpdateManyWithWhereWithoutPlaceInput } from './stamp-update-many-with-where-without-place.input';
import { StampScalarWhereInput } from './stamp-scalar-where.input';

@InputType()
export class StampUncheckedUpdateManyWithoutPlaceNestedInput {

    @Field(() => [StampCreateWithoutPlaceInput], {nullable:true})
    @Type(() => StampCreateWithoutPlaceInput)
    create?: Array<StampCreateWithoutPlaceInput>;

    @Field(() => [StampCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => StampCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<StampCreateOrConnectWithoutPlaceInput>;

    @Field(() => [StampUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => StampUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<StampUpsertWithWhereUniqueWithoutPlaceInput>;

    @Field(() => StampCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => StampCreateManyPlaceInputEnvelope)
    createMany?: StampCreateManyPlaceInputEnvelope;

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

    @Field(() => [StampUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => StampUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<StampUpdateWithWhereUniqueWithoutPlaceInput>;

    @Field(() => [StampUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => StampUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<StampUpdateManyWithWhereWithoutPlaceInput>;

    @Field(() => [StampScalarWhereInput], {nullable:true})
    @Type(() => StampScalarWhereInput)
    deleteMany?: Array<StampScalarWhereInput>;
}
