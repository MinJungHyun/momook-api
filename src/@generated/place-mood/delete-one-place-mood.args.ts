import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceMoodWhereUniqueInput } from './place-mood-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePlaceMoodArgs {

    @Field(() => PlaceMoodWhereUniqueInput, {nullable:false})
    @Type(() => PlaceMoodWhereUniqueInput)
    where!: PlaceMoodWhereUniqueInput;
}
