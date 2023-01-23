import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewMoodUpdateWithoutUserInput } from './review-mood-update-without-user.input';
import { ReviewMoodCreateWithoutUserInput } from './review-mood-create-without-user.input';

@InputType()
export class ReviewMoodUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewMoodWhereUniqueInput)
    where!: ReviewMoodWhereUniqueInput;

    @Field(() => ReviewMoodUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewMoodUpdateWithoutUserInput)
    update!: ReviewMoodUpdateWithoutUserInput;

    @Field(() => ReviewMoodCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewMoodCreateWithoutUserInput)
    create!: ReviewMoodCreateWithoutUserInput;
}
