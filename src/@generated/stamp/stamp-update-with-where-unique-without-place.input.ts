import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampWhereUniqueInput } from './stamp-where-unique.input';
import { Type } from 'class-transformer';
import { StampUpdateWithoutPlaceInput } from './stamp-update-without-place.input';

@InputType()
export class StampUpdateWithWhereUniqueWithoutPlaceInput {

    @Field(() => StampWhereUniqueInput, {nullable:false})
    @Type(() => StampWhereUniqueInput)
    where!: StampWhereUniqueInput;

    @Field(() => StampUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => StampUpdateWithoutPlaceInput)
    data!: StampUpdateWithoutPlaceInput;
}
