import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodCreateWithoutReviewInput } from './review-mood-create-without-review.input';
import { Type } from 'class-transformer';
import { ReviewMoodCreateOrConnectWithoutReviewInput } from './review-mood-create-or-connect-without-review.input';
import { ReviewMoodCreateManyReviewInputEnvelope } from './review-mood-create-many-review-input-envelope.input';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';

@InputType()
export class ReviewMoodCreateNestedManyWithoutReviewInput {

    @Field(() => [ReviewMoodCreateWithoutReviewInput], {nullable:true})
    @Type(() => ReviewMoodCreateWithoutReviewInput)
    create?: Array<ReviewMoodCreateWithoutReviewInput>;

    @Field(() => [ReviewMoodCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => ReviewMoodCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<ReviewMoodCreateOrConnectWithoutReviewInput>;

    @Field(() => ReviewMoodCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => ReviewMoodCreateManyReviewInputEnvelope)
    createMany?: ReviewMoodCreateManyReviewInputEnvelope;

    @Field(() => [ReviewMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewMoodWhereUniqueInput)
    connect?: Array<ReviewMoodWhereUniqueInput>;
}
