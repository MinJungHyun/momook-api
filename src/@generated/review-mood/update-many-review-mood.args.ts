import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewMoodUpdateManyMutationInput } from './review-mood-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReviewMoodWhereInput } from './review-mood-where.input';

@ArgsType()
export class UpdateManyReviewMoodArgs {

    @Field(() => ReviewMoodUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewMoodUpdateManyMutationInput)
    data!: ReviewMoodUpdateManyMutationInput;

    @Field(() => ReviewMoodWhereInput, {nullable:true})
    @Type(() => ReviewMoodWhereInput)
    where?: ReviewMoodWhereInput;
}
