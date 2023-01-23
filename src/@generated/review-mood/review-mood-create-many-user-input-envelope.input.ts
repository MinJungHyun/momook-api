import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodCreateManyUserInput } from './review-mood-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewMoodCreateManyUserInputEnvelope {

    @Field(() => [ReviewMoodCreateManyUserInput], {nullable:false})
    @Type(() => ReviewMoodCreateManyUserInput)
    data!: Array<ReviewMoodCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
