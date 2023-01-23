import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampWhereUniqueInput } from './stamp-where-unique.input';
import { Type } from 'class-transformer';
import { StampUpdateWithoutPlaceInput } from './stamp-update-without-place.input';
import { StampCreateWithoutPlaceInput } from './stamp-create-without-place.input';

@InputType()
export class StampUpsertWithWhereUniqueWithoutPlaceInput {

    @Field(() => StampWhereUniqueInput, {nullable:false})
    @Type(() => StampWhereUniqueInput)
    where!: StampWhereUniqueInput;

    @Field(() => StampUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => StampUpdateWithoutPlaceInput)
    update!: StampUpdateWithoutPlaceInput;

    @Field(() => StampCreateWithoutPlaceInput, {nullable:false})
    @Type(() => StampCreateWithoutPlaceInput)
    create!: StampCreateWithoutPlaceInput;
}
