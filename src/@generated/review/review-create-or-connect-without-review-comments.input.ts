import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutReviewCommentsInput } from './review-create-without-review-comments.input';

@InputType()
export class ReviewCreateOrConnectWithoutReviewCommentsInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewCreateWithoutReviewCommentsInput, {nullable:false})
    @Type(() => ReviewCreateWithoutReviewCommentsInput)
    create!: ReviewCreateWithoutReviewCommentsInput;
}
