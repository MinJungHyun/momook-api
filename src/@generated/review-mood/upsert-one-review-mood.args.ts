import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewMoodCreateInput } from './review-mood-create.input';
import { ReviewMoodUpdateInput } from './review-mood-update.input';

@ArgsType()
export class UpsertOneReviewMoodArgs {

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:false})
    @Type(() => ReviewMoodWhereUniqueInput)
    where!: ReviewMoodWhereUniqueInput;

    @Field(() => ReviewMoodCreateInput, {nullable:false})
    @Type(() => ReviewMoodCreateInput)
    create!: ReviewMoodCreateInput;

    @Field(() => ReviewMoodUpdateInput, {nullable:false})
    @Type(() => ReviewMoodUpdateInput)
    update!: ReviewMoodUpdateInput;
}
