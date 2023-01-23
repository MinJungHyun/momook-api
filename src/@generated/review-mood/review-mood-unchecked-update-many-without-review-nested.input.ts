import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodCreateWithoutReviewInput } from './review-mood-create-without-review.input';
import { Type } from 'class-transformer';
import { ReviewMoodCreateOrConnectWithoutReviewInput } from './review-mood-create-or-connect-without-review.input';
import { ReviewMoodUpsertWithWhereUniqueWithoutReviewInput } from './review-mood-upsert-with-where-unique-without-review.input';
import { ReviewMoodCreateManyReviewInputEnvelope } from './review-mood-create-many-review-input-envelope.input';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { ReviewMoodUpdateWithWhereUniqueWithoutReviewInput } from './review-mood-update-with-where-unique-without-review.input';
import { ReviewMoodUpdateManyWithWhereWithoutReviewInput } from './review-mood-update-many-with-where-without-review.input';
import { ReviewMoodScalarWhereInput } from './review-mood-scalar-where.input';

@InputType()
export class ReviewMoodUncheckedUpdateManyWithoutReviewNestedInput {

    @Field(() => [ReviewMoodCreateWithoutReviewInput], {nullable:true})
    @Type(() => ReviewMoodCreateWithoutReviewInput)
    create?: Array<ReviewMoodCreateWithoutReviewInput>;

    @Field(() => [ReviewMoodCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => ReviewMoodCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<ReviewMoodCreateOrConnectWithoutReviewInput>;

    @Field(() => [ReviewMoodUpsertWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => ReviewMoodUpsertWithWhereUniqueWithoutReviewInput)
    upsert?: Array<ReviewMoodUpsertWithWhereUniqueWithoutReviewInput>;

    @Field(() => ReviewMoodCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => ReviewMoodCreateManyReviewInputEnvelope)
    createMany?: ReviewMoodCreateManyReviewInputEnvelope;

    @Field(() => [ReviewMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewMoodWhereUniqueInput)
    set?: Array<ReviewMoodWhereUniqueInput>;

    @Field(() => [ReviewMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewMoodWhereUniqueInput)
    disconnect?: Array<ReviewMoodWhereUniqueInput>;

    @Field(() => [ReviewMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewMoodWhereUniqueInput)
    delete?: Array<ReviewMoodWhereUniqueInput>;

    @Field(() => [ReviewMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewMoodWhereUniqueInput)
    connect?: Array<ReviewMoodWhereUniqueInput>;

    @Field(() => [ReviewMoodUpdateWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => ReviewMoodUpdateWithWhereUniqueWithoutReviewInput)
    update?: Array<ReviewMoodUpdateWithWhereUniqueWithoutReviewInput>;

    @Field(() => [ReviewMoodUpdateManyWithWhereWithoutReviewInput], {nullable:true})
    @Type(() => ReviewMoodUpdateManyWithWhereWithoutReviewInput)
    updateMany?: Array<ReviewMoodUpdateManyWithWhereWithoutReviewInput>;

    @Field(() => [ReviewMoodScalarWhereInput], {nullable:true})
    @Type(() => ReviewMoodScalarWhereInput)
    deleteMany?: Array<ReviewMoodScalarWhereInput>;
}
