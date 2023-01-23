import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodCreateManyPlaceInput } from './review-mood-create-many-place.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewMoodCreateManyPlaceInputEnvelope {

    @Field(() => [ReviewMoodCreateManyPlaceInput], {nullable:false})
    @Type(() => ReviewMoodCreateManyPlaceInput)
    data!: Array<ReviewMoodCreateManyPlaceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
