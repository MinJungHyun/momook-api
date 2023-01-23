import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentCreateWithoutPlaceInput } from './review-comment-create-without-place.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateOrConnectWithoutPlaceInput } from './review-comment-create-or-connect-without-place.input';
import { ReviewCommentCreateManyPlaceInputEnvelope } from './review-comment-create-many-place-input-envelope.input';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';

@InputType()
export class ReviewCommentUncheckedCreateNestedManyWithoutPlaceInput {

    @Field(() => [ReviewCommentCreateWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentCreateWithoutPlaceInput)
    create?: Array<ReviewCommentCreateWithoutPlaceInput>;

    @Field(() => [ReviewCommentCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<ReviewCommentCreateOrConnectWithoutPlaceInput>;

    @Field(() => ReviewCommentCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentCreateManyPlaceInputEnvelope)
    createMany?: ReviewCommentCreateManyPlaceInputEnvelope;

    @Field(() => [ReviewCommentWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentWhereUniqueInput)
    connect?: Array<ReviewCommentWhereUniqueInput>;
}
