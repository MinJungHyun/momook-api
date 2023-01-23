import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceMoodCreateManyInput } from './place-mood-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPlaceMoodArgs {

    @Field(() => [PlaceMoodCreateManyInput], {nullable:false})
    @Type(() => PlaceMoodCreateManyInput)
    data!: Array<PlaceMoodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
