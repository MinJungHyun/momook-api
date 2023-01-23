import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewMoodWhereInput } from './review-mood-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReviewMoodArgs {

    @Field(() => ReviewMoodWhereInput, {nullable:true})
    @Type(() => ReviewMoodWhereInput)
    where?: ReviewMoodWhereInput;
}
