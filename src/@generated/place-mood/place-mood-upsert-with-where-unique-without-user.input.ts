import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceMoodUpdateWithoutUserInput } from './place-mood-update-without-user.input';
import { PlaceMoodCreateWithoutUserInput } from './place-mood-create-without-user.input';

@InputType()
export class PlaceMoodUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PlaceMoodWhereUniqueInput, {nullable:false})
    @Type(() => PlaceMoodWhereUniqueInput)
    where!: PlaceMoodWhereUniqueInput;

    @Field(() => PlaceMoodUpdateWithoutUserInput, {nullable:false})
    @Type(() => PlaceMoodUpdateWithoutUserInput)
    update!: PlaceMoodUpdateWithoutUserInput;

    @Field(() => PlaceMoodCreateWithoutUserInput, {nullable:false})
    @Type(() => PlaceMoodCreateWithoutUserInput)
    create!: PlaceMoodCreateWithoutUserInput;
}
