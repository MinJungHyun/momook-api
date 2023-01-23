import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentCreateWithoutUserInput } from './review-comment-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateOrConnectWithoutUserInput } from './review-comment-create-or-connect-without-user.input';
import { ReviewCommentUpsertWithWhereUniqueWithoutUserInput } from './review-comment-upsert-with-where-unique-without-user.input';
import { ReviewCommentCreateManyUserInputEnvelope } from './review-comment-create-many-user-input-envelope.input';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { ReviewCommentUpdateWithWhereUniqueWithoutUserInput } from './review-comment-update-with-where-unique-without-user.input';
import { ReviewCommentUpdateManyWithWhereWithoutUserInput } from './review-comment-update-many-with-where-without-user.input';
import { ReviewCommentScalarWhereInput } from './review-comment-scalar-where.input';

@InputType()
export class ReviewCommentUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ReviewCommentCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentCreateWithoutUserInput)
    create?: Array<ReviewCommentCreateWithoutUserInput>;

    @Field(() => [ReviewCommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCommentCreateOrConnectWithoutUserInput>;

    @Field(() => [ReviewCommentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReviewCommentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReviewCommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentCreateManyUserInputEnvelope)
    createMany?: ReviewCommentCreateManyUserInputEnvelope;

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

    @Field(() => [ReviewCommentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReviewCommentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReviewCommentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReviewCommentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReviewCommentScalarWhereInput], {nullable:true})
    @Type(() => ReviewCommentScalarWhereInput)
    deleteMany?: Array<ReviewCommentScalarWhereInput>;
}
