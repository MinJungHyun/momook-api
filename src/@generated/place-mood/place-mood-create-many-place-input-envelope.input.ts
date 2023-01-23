import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceMoodCreateManyPlaceInput } from './place-mood-create-many-place.input';
import { Type } from 'class-transformer';

@InputType()
export class PlaceMoodCreateManyPlaceInputEnvelope {

    @Field(() => [PlaceMoodCreateManyPlaceInput], {nullable:false})
    @Type(() => PlaceMoodCreateManyPlaceInput)
    data!: Array<PlaceMoodCreateManyPlaceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
