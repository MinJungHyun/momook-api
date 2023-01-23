import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutReviewCommentsInput } from './review-create-without-review-comments.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutReviewCommentsInput } from './review-create-or-connect-without-review-comments.input';
import { ReviewUpsertWithoutReviewCommentsInput } from './review-upsert-without-review-comments.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithoutReviewCommentsInput } from './review-update-without-review-comments.input';

@InputType()
export class ReviewUpdateOneWithoutReviewCommentsNestedInput {

    @Field(() => ReviewCreateWithoutReviewCommentsInput, {nullable:true})
    @Type(() => ReviewCreateWithoutReviewCommentsInput)
    create?: ReviewCreateWithoutReviewCommentsInput;

    @Field(() => ReviewCreateOrConnectWithoutReviewCommentsInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutReviewCommentsInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewCommentsInput;

    @Field(() => ReviewUpsertWithoutReviewCommentsInput, {nullable:true})
    @Type(() => ReviewUpsertWithoutReviewCommentsInput)
    upsert?: ReviewUpsertWithoutReviewCommentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: ReviewWhereUniqueInput;

    @Field(() => ReviewUpdateWithoutReviewCommentsInput, {nullable:true})
    @Type(() => ReviewUpdateWithoutReviewCommentsInput)
    update?: ReviewUpdateWithoutReviewCommentsInput;
}
