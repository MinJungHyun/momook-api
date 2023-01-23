import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampCreateWithoutPlaceInput } from './stamp-create-without-place.input';
import { Type } from 'class-transformer';
import { StampCreateOrConnectWithoutPlaceInput } from './stamp-create-or-connect-without-place.input';
import { StampCreateManyPlaceInputEnvelope } from './stamp-create-many-place-input-envelope.input';
import { StampWhereUniqueInput } from './stamp-where-unique.input';

@InputType()
export class StampCreateNestedManyWithoutPlaceInput {

    @Field(() => [StampCreateWithoutPlaceInput], {nullable:true})
    @Type(() => StampCreateWithoutPlaceInput)
    create?: Array<StampCreateWithoutPlaceInput>;

    @Field(() => [StampCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => StampCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<StampCreateOrConnectWithoutPlaceInput>;

    @Field(() => StampCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => StampCreateManyPlaceInputEnvelope)
    createMany?: StampCreateManyPlaceInputEnvelope;

    @Field(() => [StampWhereUniqueInput], {nullable:true})
    @Type(() => StampWhereUniqueInput)
    connect?: Array<StampWhereUniqueInput>;
}
