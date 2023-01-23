import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceMoodUpdateManyMutationInput } from './place-mood-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PlaceMoodWhereInput } from './place-mood-where.input';

@ArgsType()
export class UpdateManyPlaceMoodArgs {

    @Field(() => PlaceMoodUpdateManyMutationInput, {nullable:false})
    @Type(() => PlaceMoodUpdateManyMutationInput)
    data!: PlaceMoodUpdateManyMutationInput;

    @Field(() => PlaceMoodWhereInput, {nullable:true})
    @Type(() => PlaceMoodWhereInput)
    where?: PlaceMoodWhereInput;
}
