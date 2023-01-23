import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewMoodUpdateWithoutUserInput } from './review-mood-update-without-user.input';

@InputType()
export class ReviewMoodUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewMoodWhereUniqueInput)
    where!: ReviewMoodWhereUniqueInput;

    @Field(() => ReviewMoodUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewMoodUpdateWithoutUserInput)
    data!: ReviewMoodUpdateWithoutUserInput;
}
