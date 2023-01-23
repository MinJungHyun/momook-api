import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceMoodCreateInput } from './place-mood-create.input';
import { PlaceMoodUpdateInput } from './place-mood-update.input';

@ArgsType()
export class UpsertOnePlaceMoodArgs {

    @Field(() => PlaceMoodWhereUniqueInput, {nullable:false})
    @Type(() => PlaceMoodWhereUniqueInput)
    where!: PlaceMoodWhereUniqueInput;

    @Field(() => PlaceMoodCreateInput, {nullable:false})
    @Type(() => PlaceMoodCreateInput)
    create!: PlaceMoodCreateInput;

    @Field(() => PlaceMoodUpdateInput, {nullable:false})
    @Type(() => PlaceMoodUpdateInput)
    update!: PlaceMoodUpdateInput;
}
