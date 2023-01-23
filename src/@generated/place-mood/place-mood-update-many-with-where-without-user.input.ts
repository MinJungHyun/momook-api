import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodScalarWhereInput } from './place-mood-scalar-where.input';
import { Type } from 'class-transformer';
import { PlaceMoodUpdateManyMutationInput } from './place-mood-update-many-mutation.input';

@InputType()
export class PlaceMoodUpdateManyWithWhereWithoutUserInput {

    @Field(() => PlaceMoodScalarWhereInput, {nullable:false})
    @Type(() => PlaceMoodScalarWhereInput)
    where!: PlaceMoodScalarWhereInput;

    @Field(() => PlaceMoodUpdateManyMutationInput, {nullable:false})
    @Type(() => PlaceMoodUpdateManyMutationInput)
    data!: PlaceMoodUpdateManyMutationInput;
}
