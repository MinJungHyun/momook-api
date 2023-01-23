import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentCreateWithoutUserInput } from './review-comment-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateOrConnectWithoutUserInput } from './review-comment-create-or-connect-without-user.input';
import { ReviewCommentCreateManyUserInputEnvelope } from './review-comment-create-many-user-input-envelope.input';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';

@InputType()
export class ReviewCommentCreateNestedManyWithoutUserInput {

    @Field(() => [ReviewCommentCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentCreateWithoutUserInput)
    create?: Array<ReviewCommentCreateWithoutUserInput>;

    @Field(() => [ReviewCommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCommentCreateOrConnectWithoutUserInput>;

    @Field(() => ReviewCommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentCreateManyUserInputEnvelope)
    createMany?: ReviewCommentCreateManyUserInputEnvelope;

    @Field(() => [ReviewCommentWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentWhereUniqueInput)
    connect?: Array<ReviewCommentWhereUniqueInput>;
}
