import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampWhereUniqueInput } from './stamp-where-unique.input';
import { Type } from 'class-transformer';
import { StampCreateWithoutPlaceInput } from './stamp-create-without-place.input';

@InputType()
export class StampCreateOrConnectWithoutPlaceInput {

    @Field(() => StampWhereUniqueInput, {nullable:false})
    @Type(() => StampWhereUniqueInput)
    where!: StampWhereUniqueInput;

    @Field(() => StampCreateWithoutPlaceInput, {nullable:false})
    @Type(() => StampCreateWithoutPlaceInput)
    create!: StampCreateWithoutPlaceInput;
}
