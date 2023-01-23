import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentUpdateWithoutPlaceInput } from './review-comment-update-without-place.input';
import { ReviewCommentCreateWithoutPlaceInput } from './review-comment-create-without-place.input';

@InputType()
export class ReviewCommentUpsertWithWhereUniqueWithoutPlaceInput {

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentWhereUniqueInput)
    where!: ReviewCommentWhereUniqueInput;

    @Field(() => ReviewCommentUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewCommentUpdateWithoutPlaceInput)
    update!: ReviewCommentUpdateWithoutPlaceInput;

    @Field(() => ReviewCommentCreateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewCommentCreateWithoutPlaceInput)
    create!: ReviewCommentCreateWithoutPlaceInput;
}
