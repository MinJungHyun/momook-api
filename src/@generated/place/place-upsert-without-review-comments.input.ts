import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceUpdateWithoutReviewCommentsInput } from './place-update-without-review-comments.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutReviewCommentsInput } from './place-create-without-review-comments.input';

@InputType()
export class PlaceUpsertWithoutReviewCommentsInput {

    @Field(() => PlaceUpdateWithoutReviewCommentsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutReviewCommentsInput)
    update!: PlaceUpdateWithoutReviewCommentsInput;

    @Field(() => PlaceCreateWithoutReviewCommentsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutReviewCommentsInput)
    create!: PlaceCreateWithoutReviewCommentsInput;
}
