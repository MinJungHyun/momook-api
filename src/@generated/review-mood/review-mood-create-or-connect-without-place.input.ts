import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewMoodCreateWithoutPlaceInput } from './review-mood-create-without-place.input';

@InputType()
export class ReviewMoodCreateOrConnectWithoutPlaceInput {

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewMoodWhereUniqueInput)
    where!: ReviewMoodWhereUniqueInput;

    @Field(() => ReviewMoodCreateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewMoodCreateWithoutPlaceInput)
    create!: ReviewMoodCreateWithoutPlaceInput;
}
