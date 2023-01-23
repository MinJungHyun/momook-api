import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewMoodUpdateInput } from './review-mood-update.input';
import { Type } from 'class-transformer';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';

@ArgsType()
export class UpdateOneReviewMoodArgs {

    @Field(() => ReviewMoodUpdateInput, {nullable:false})
    @Type(() => ReviewMoodUpdateInput)
    data!: ReviewMoodUpdateInput;

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewMoodWhereUniqueInput)
    where!: ReviewMoodWhereUniqueInput;
}
