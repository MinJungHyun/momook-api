import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceMoodWhereInput } from './place-mood-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPlaceMoodArgs {

    @Field(() => PlaceMoodWhereInput, {nullable:true})
    @Type(() => PlaceMoodWhereInput)
    where?: PlaceMoodWhereInput;
}
