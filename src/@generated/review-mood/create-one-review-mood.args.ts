import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewMoodCreateInput } from './review-mood-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReviewMoodArgs {

    @Field(() => ReviewMoodCreateInput, {nullable:false})
    @Type(() => ReviewMoodCreateInput)
    data!: ReviewMoodCreateInput;
}
