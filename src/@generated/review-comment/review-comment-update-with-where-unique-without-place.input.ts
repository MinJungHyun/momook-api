import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentWhereUniqueInput } from './review-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCommentUpdateWithoutPlaceInput } from './review-comment-update-without-place.input';

@InputType()
export class ReviewCommentUpdateWithWhereUniqueWithoutPlaceInput {

    @Field(() => ReviewCommentWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCommentWhereUniqueInput)
    where!: ReviewCommentWhereUniqueInput;

    @Field(() => ReviewCommentUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewCommentUpdateWithoutPlaceInput)
    data!: ReviewCommentUpdateWithoutPlaceInput;
}
