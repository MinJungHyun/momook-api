import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewMoodCreateManyInput } from './review-mood-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReviewMoodArgs {

    @Field(() => [ReviewMoodCreateManyInput], {nullable:false})
    @Type(() => ReviewMoodCreateManyInput)
    data!: Array<ReviewMoodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
