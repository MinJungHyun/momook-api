import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentCreateWithoutPlaceInput } from './review-comment-create-without-place.input';

@InputType()
export class ReviewCommentCreateOrConnectWithoutPlaceInput {

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentWhereUniqueInput)
    where!: ReviewCommentWhereUniqueInput;

    @Field(() => ReviewCommentCreateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewCommentCreateWithoutPlaceInput)
    create!: ReviewCommentCreateWithoutPlaceInput;
}
