import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateWithoutReviewInput } from './review-comment-mood-create-without-review.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateOrConnectWithoutReviewInput } from './review-comment-mood-create-or-connect-without-review.input';
import { ReviewCommentMoodUpsertWithWhereUniqueWithoutReviewInput } from './review-comment-mood-upsert-with-where-unique-without-review.input';
import { ReviewCommentMoodCreateManyReviewInputEnvelope } from './review-comment-mood-create-many-review-input-envelope.input';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { ReviewCommentMoodUpdateWithWhereUniqueWithoutReviewInput } from './review-comment-mood-update-with-where-unique-without-review.input';
import { ReviewCommentMoodUpdateManyWithWhereWithoutReviewInput } from './review-comment-mood-update-many-with-where-without-review.input';
import { ReviewCommentMoodScalarWhereInput } from './review-comment-mood-scalar-where.input';

@InputType()
export class ReviewCommentMoodUncheckedUpdateManyWithoutReviewNestedInput {

    @Field(() => [ReviewCommentMoodCreateWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateWithoutReviewInput)
    create?: Array<ReviewCommentMoodCreateWithoutReviewInput>;

    @Field(() => [ReviewCommentMoodCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<ReviewCommentMoodCreateOrConnectWithoutReviewInput>;

    @Field(() => [ReviewCommentMoodUpsertWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpsertWithWhereUniqueWithoutReviewInput)
    upsert?: Array<ReviewCommentMoodUpsertWithWhereUniqueWithoutReviewInput>;

    @Field(() => ReviewCommentMoodCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentMoodCreateManyReviewInputEnvelope)
    createMany?: ReviewCommentMoodCreateManyReviewInputEnvelope;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    set?: Array<ReviewCommentMoodWhereUniqueInput>;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    disconnect?: Array<ReviewCommentMoodWhereUniqueInput>;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    delete?: Array<ReviewCommentMoodWhereUniqueInput>;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    connect?: Array<ReviewCommentMoodWhereUniqueInput>;

    @Field(() => [ReviewCommentMoodUpdateWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpdateWithWhereUniqueWithoutReviewInput)
    update?: Array<ReviewCommentMoodUpdateWithWhereUniqueWithoutReviewInput>;

    @Field(() => [ReviewCommentMoodUpdateManyWithWhereWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpdateManyWithWhereWithoutReviewInput)
    updateMany?: Array<ReviewCommentMoodUpdateManyWithWhereWithoutReviewInput>;

    @Field(() => [ReviewCommentMoodScalarWhereInput], {nullable:true})
    @Type(() => ReviewCommentMoodScalarWhereInput)
    deleteMany?: Array<ReviewCommentMoodScalarWhereInput>;
}
