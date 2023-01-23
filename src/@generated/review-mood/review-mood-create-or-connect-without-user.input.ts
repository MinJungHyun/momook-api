import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewMoodCreateWithoutUserInput } from './review-mood-create-without-user.input';

@InputType()
export class ReviewMoodCreateOrConnectWithoutUserInput {

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewMoodWhereUniqueInput)
    where!: ReviewMoodWhereUniqueInput;

    @Field(() => ReviewMoodCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewMoodCreateWithoutUserInput)
    create!: ReviewMoodCreateWithoutUserInput;
}
