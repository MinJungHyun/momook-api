import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneReviewMoodArgs {

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewMoodWhereUniqueInput)
    where!: ReviewMoodWhereUniqueInput;
}
