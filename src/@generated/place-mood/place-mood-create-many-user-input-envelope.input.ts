import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodCreateManyUserInput } from './place-mood-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PlaceMoodCreateManyUserInputEnvelope {

    @Field(() => [PlaceMoodCreateManyUserInput], {nullable:false})
    @Type(() => PlaceMoodCreateManyUserInput)
    data!: Array<PlaceMoodCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
