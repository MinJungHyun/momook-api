import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceUpdateWithoutReviewCommentMoodsInput } from './place-update-without-review-comment-moods.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutReviewCommentMoodsInput } from './place-create-without-review-comment-moods.input';

@InputType()
export class PlaceUpsertWithoutReviewCommentMoodsInput {

    @Field(() => PlaceUpdateWithoutReviewCommentMoodsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutReviewCommentMoodsInput)
    update!: PlaceUpdateWithoutReviewCommentMoodsInput;

    @Field(() => PlaceCreateWithoutReviewCommentMoodsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutReviewCommentMoodsInput)
    create!: PlaceCreateWithoutReviewCommentMoodsInput;
}
