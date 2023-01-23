import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewMoodUpdateWithoutPlaceInput } from './review-mood-update-without-place.input';

@InputType()
export class ReviewMoodUpdateWithWhereUniqueWithoutPlaceInput {

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewMoodWhereUniqueInput)
    where!: ReviewMoodWhereUniqueInput;

    @Field(() => ReviewMoodUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewMoodUpdateWithoutPlaceInput)
    data!: ReviewMoodUpdateWithoutPlaceInput;
}
