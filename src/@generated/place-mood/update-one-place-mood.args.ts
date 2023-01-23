import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceMoodUpdateInput } from './place-mood-update.input';
import { Type } from 'class-transformer';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';

@ArgsType()
export class UpdateOnePlaceMoodArgs {

    @Field(() => PlaceMoodUpdateInput, {nullable:false})
    @Type(() => PlaceMoodUpdateInput)
    data!: PlaceMoodUpdateInput;

    @Field(() => PlaceMoodWhereUniqueInput, {nullable:false})
    @Type(() => PlaceMoodWhereUniqueInput)
    where!: PlaceMoodWhereUniqueInput;
}
