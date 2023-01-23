import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutReviewMoodsInput } from './review-create-without-review-moods.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutReviewMoodsInput } from './review-create-or-connect-without-review-moods.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedOneWithoutReviewMoodsInput {

    @Field(() => ReviewCreateWithoutReviewMoodsInput, {nullable:true})
    @Type(() => ReviewCreateWithoutReviewMoodsInput)
    create?: ReviewCreateWithoutReviewMoodsInput;

    @Field(() => ReviewCreateOrConnectWithoutReviewMoodsInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutReviewMoodsInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewMoodsInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: ReviewWhereUniqueInput;
}
