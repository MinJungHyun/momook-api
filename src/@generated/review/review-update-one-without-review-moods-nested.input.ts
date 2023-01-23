import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutReviewMoodsInput } from './review-create-without-review-moods.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutReviewMoodsInput } from './review-create-or-connect-without-review-moods.input';
import { ReviewUpsertWithoutReviewMoodsInput } from './review-upsert-without-review-moods.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithoutReviewMoodsInput } from './review-update-without-review-moods.input';

@InputType()
export class ReviewUpdateOneWithoutReviewMoodsNestedInput {

    @Field(() => ReviewCreateWithoutReviewMoodsInput, {nullable:true})
    @Type(() => ReviewCreateWithoutReviewMoodsInput)
    create?: ReviewCreateWithoutReviewMoodsInput;

    @Field(() => ReviewCreateOrConnectWithoutReviewMoodsInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutReviewMoodsInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewMoodsInput;

    @Field(() => ReviewUpsertWithoutReviewMoodsInput, {nullable:true})
    @Type(() => ReviewUpsertWithoutReviewMoodsInput)
    upsert?: ReviewUpsertWithoutReviewMoodsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: ReviewWhereUniqueInput;

    @Field(() => ReviewUpdateWithoutReviewMoodsInput, {nullable:true})
    @Type(() => ReviewUpdateWithoutReviewMoodsInput)
    update?: ReviewUpdateWithoutReviewMoodsInput;
}
