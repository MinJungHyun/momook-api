import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutReviewCommentsInput } from './review-create-without-review-comments.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutReviewCommentsInput } from './review-create-or-connect-without-review-comments.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedOneWithoutReviewCommentsInput {

    @Field(() => ReviewCreateWithoutReviewCommentsInput, {nullable:true})
    @Type(() => ReviewCreateWithoutReviewCommentsInput)
    create?: ReviewCreateWithoutReviewCommentsInput;

    @Field(() => ReviewCreateOrConnectWithoutReviewCommentsInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutReviewCommentsInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewCommentsInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: ReviewWhereUniqueInput;
}
