import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutReviewMoodsInput } from './review-create-without-review-moods.input';

@InputType()
export class ReviewCreateOrConnectWithoutReviewMoodsInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewCreateWithoutReviewMoodsInput, {nullable:false})
    @Type(() => ReviewCreateWithoutReviewMoodsInput)
    create!: ReviewCreateWithoutReviewMoodsInput;
}
