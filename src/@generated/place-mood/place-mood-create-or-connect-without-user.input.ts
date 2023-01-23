import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceMoodCreateWithoutUserInput } from './place-mood-create-without-user.input';

@InputType()
export class PlaceMoodCreateOrConnectWithoutUserInput {

    @Field(() => PlaceMoodWhereUniqueInput, {nullable:false})
    @Type(() => PlaceMoodWhereUniqueInput)
    where!: PlaceMoodWhereUniqueInput;

    @Field(() => PlaceMoodCreateWithoutUserInput, {nullable:false})
    @Type(() => PlaceMoodCreateWithoutUserInput)
    create!: PlaceMoodCreateWithoutUserInput;
}
