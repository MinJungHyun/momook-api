import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceCreateManyInput } from './place-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPlaceArgs {

    @Field(() => [PlaceCreateManyInput], {nullable:false})
    @Type(() => PlaceCreateManyInput)
    data!: Array<PlaceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
