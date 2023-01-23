import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StampCreateManyPlaceInput } from './stamp-create-many-place.input';
import { Type } from 'class-transformer';

@InputType()
export class StampCreateManyPlaceInputEnvelope {

    @Field(() => [StampCreateManyPlaceInput], {nullable:false})
    @Type(() => StampCreateManyPlaceInput)
    data!: Array<StampCreateManyPlaceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
