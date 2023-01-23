import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodScalarWhereInput } from './review-mood-scalar-where.input';
import { Type } from 'class-transformer';
import { ReviewMoodUpdateManyMutationInput } from './review-mood-update-many-mutation.input';

@InputType()
export class ReviewMoodUpdateManyWithWhereWithoutPlaceInput {

    @Field(() => ReviewMoodScalarWhereInput, {nullable:false})
    @Type(() => ReviewMoodScalarWhereInput)
    where!: ReviewMoodScalarWhereInput;

    @Field(() => ReviewMoodUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewMoodUpdateManyMutationInput)
    data!: ReviewMoodUpdateManyMutationInput;
}
