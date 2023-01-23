import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateWithoutReviewCommentInput } from './review-comment-mood-create-without-review-comment.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateOrConnectWithoutReviewCommentInput } from './review-comment-mood-create-or-connect-without-review-comment.input';
import { ReviewCommentMoodUpsertWithWhereUniqueWithoutReviewCommentInput } from './review-comment-mood-upsert-with-where-unique-without-review-comment.input';
import { ReviewCommentMoodCreateManyReviewCommentInputEnvelope } from './review-comment-mood-create-many-review-comment-input-envelope.input';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { ReviewCommentMoodUpdateWithWhereUniqueWithoutReviewCommentInput } from './review-comment-mood-update-with-where-unique-without-review-comment.input';
import { ReviewCommentMoodUpdateManyWithWhereWithoutReviewCommentInput } from './review-comment-mood-update-many-with-where-without-review-comment.input';
import { ReviewCommentMoodScalarWhereInput } from './review-comment-mood-scalar-where.input';

@InputType()
export class ReviewCommentMoodUpdateManyWithoutReviewCommentNestedInput {

    @Field(() => [ReviewCommentMoodCreateWithoutReviewCommentInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateWithoutReviewCommentInput)
    create?: Array<ReviewCommentMoodCreateWithoutReviewCommentInput>;

    @Field(() => [ReviewCommentMoodCreateOrConnectWithoutReviewCommentInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateOrConnectWithoutReviewCommentInput)
    connectOrCreate?: Array<ReviewCommentMoodCreateOrConnectWithoutReviewCommentInput>;

    @Field(() => [ReviewCommentMoodUpsertWithWhereUniqueWithoutReviewCommentInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpsertWithWhereUniqueWithoutReviewCommentInput)
    upsert?: Array<ReviewCommentMoodUpsertWithWhereUniqueWithoutReviewCommentInput>;

    @Field(() => ReviewCommentMoodCreateManyReviewCommentInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentMoodCreateManyReviewCommentInputEnvelope)
    createMany?: ReviewCommentMoodCreateManyReviewCommentInputEnvelope;

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

    @Field(() => [ReviewCommentMoodUpdateWithWhereUniqueWithoutReviewCommentInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpdateWithWhereUniqueWithoutReviewCommentInput)
    update?: Array<ReviewCommentMoodUpdateWithWhereUniqueWithoutReviewCommentInput>;

    @Field(() => [ReviewCommentMoodUpdateManyWithWhereWithoutReviewCommentInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpdateManyWithWhereWithoutReviewCommentInput)
    updateMany?: Array<ReviewCommentMoodUpdateManyWithWhereWithoutReviewCommentInput>;

    @Field(() => [ReviewCommentMoodScalarWhereInput], {nullable:true})
    @Type(() => ReviewCommentMoodScalarWhereInput)
    deleteMany?: Array<ReviewCommentMoodScalarWhereInput>;
}
