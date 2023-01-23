import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentCreateWithoutPlaceInput } from './review-comment-create-without-place.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateOrConnectWithoutPlaceInput } from './review-comment-create-or-connect-without-place.input';
import { ReviewCommentUpsertWithWhereUniqueWithoutPlaceInput } from './review-comment-upsert-with-where-unique-without-place.input';
import { ReviewCommentCreateManyPlaceInputEnvelope } from './review-comment-create-many-place-input-envelope.input';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { ReviewCommentUpdateWithWhereUniqueWithoutPlaceInput } from './review-comment-update-with-where-unique-without-place.input';
import { ReviewCommentUpdateManyWithWhereWithoutPlaceInput } from './review-comment-update-many-with-where-without-place.input';
import { ReviewCommentScalarWhereInput } from './review-comment-scalar-where.input';

@InputType()
export class ReviewCommentUpdateManyWithoutPlaceNestedInput {

    @Field(() => [ReviewCommentCreateWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentCreateWithoutPlaceInput)
    create?: Array<ReviewCommentCreateWithoutPlaceInput>;

    @Field(() => [ReviewCommentCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<ReviewCommentCreateOrConnectWithoutPlaceInput>;

    @Field(() => [ReviewCommentUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<ReviewCommentUpsertWithWhereUniqueWithoutPlaceInput>;

    @Field(() => ReviewCommentCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentCreateManyPlaceInputEnvelope)
    createMany?: ReviewCommentCreateManyPlaceInputEnvelope;

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

    @Field(() => [ReviewCommentUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<ReviewCommentUpdateWithWhereUniqueWithoutPlaceInput>;

    @Field(() => [ReviewCommentUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<ReviewCommentUpdateManyWithWhereWithoutPlaceInput>;

    @Field(() => [ReviewCommentScalarWhereInput], {nullable:true})
    @Type(() => ReviewCommentScalarWhereInput)
    deleteMany?: Array<ReviewCommentScalarWhereInput>;
}
