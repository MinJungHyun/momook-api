import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceMoodUpdateWithoutUserInput } from './place-mood-update-without-user.input';

@InputType()
export class PlaceMoodUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PlaceMoodWhereUniqueInput, {nullable:false})
    @Type(() => PlaceMoodWhereUniqueInput)
    where!: PlaceMoodWhereUniqueInput;

    @Field(() => PlaceMoodUpdateWithoutUserInput, {nullable:false})
    @Type(() => PlaceMoodUpdateWithoutUserInput)
    data!: PlaceMoodUpdateWithoutUserInput;
}
