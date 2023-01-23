import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentCreateWithoutReviewInput } from './review-comment-create-without-review.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateOrConnectWithoutReviewInput } from './review-comment-create-or-connect-without-review.input';
import { ReviewCommentUpsertWithWhereUniqueWithoutReviewInput } from './review-comment-upsert-with-where-unique-without-review.input';
import { ReviewCommentCreateManyReviewInputEnvelope } from './review-comment-create-many-review-input-envelope.input';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { ReviewCommentUpdateWithWhereUniqueWithoutReviewInput } from './review-comment-update-with-where-unique-without-review.input';
import { ReviewCommentUpdateManyWithWhereWithoutReviewInput } from './review-comment-update-many-with-where-without-review.input';
import { ReviewCommentScalarWhereInput } from './review-comment-scalar-where.input';

@InputType()
export class ReviewCommentUpdateManyWithoutReviewNestedInput {

    @Field(() => [ReviewCommentCreateWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentCreateWithoutReviewInput)
    create?: Array<ReviewCommentCreateWithoutReviewInput>;

    @Field(() => [ReviewCommentCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<ReviewCommentCreateOrConnectWithoutReviewInput>;

    @Field(() => [ReviewCommentUpsertWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentUpsertWithWhereUniqueWithoutReviewInput)
    upsert?: Array<ReviewCommentUpsertWithWhereUniqueWithoutReviewInput>;

    @Field(() => ReviewCommentCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentCreateManyReviewInputEnvelope)
    createMany?: ReviewCommentCreateManyReviewInputEnvelope;

    @Field(() => [ReviewCommentWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentWhereUniqueInput)
    set?: Array<ReviewCommentWhereUniqueInput>;

    @Field(() => [ReviewCommentWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentWhereUniqueInput)
    disconnect?: Array<ReviewCommentWhereUniqueInput>;

    @Field(() => [ReviewCommentWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentWhereUniqueInput)
    delete?: Array<ReviewCommentWhereUniqueInput>;

    @Field(() => [ReviewCommentWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentWhereUniqueInput)
    connect?: Array<ReviewCommentWhereUniqueInput>;

    @Field(() => [ReviewCommentUpdateWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentUpdateWithWhereUniqueWithoutReviewInput)
    update?: Array<ReviewCommentUpdateWithWhereUniqueWithoutReviewInput>;

    @Field(() => [ReviewCommentUpdateManyWithWhereWithoutReviewInput], {nullable:true})
    @Type(() => ReviewCommentUpdateManyWithWhereWithoutReviewInput)
    updateMany?: Array<ReviewCommentUpdateManyWithWhereWithoutReviewInput>;

    @Field(() => [ReviewCommentScalarWhereInput], {nullable:true})
    @Type(() => ReviewCommentScalarWhereInput)
    deleteMany?: Array<ReviewCommentScalarWhereInput>;
}
