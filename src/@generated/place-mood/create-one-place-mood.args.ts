import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceMoodCreateInput } from './place-mood-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePlaceMoodArgs {

    @Field(() => PlaceMoodCreateInput, {nullable:false})
    @Type(() => PlaceMoodCreateInput)
    data!: PlaceMoodCreateInput;
}
