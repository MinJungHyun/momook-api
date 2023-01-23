import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutReviewCommentMoodInput } from './review-create-without-review-comment-mood.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutReviewCommentMoodInput } from './review-create-or-connect-without-review-comment-mood.input';
import { ReviewUpsertWithoutReviewCommentMoodInput } from './review-upsert-without-review-comment-mood.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithoutReviewCommentMoodInput } from './review-update-without-review-comment-mood.input';

@InputType()
export class ReviewUpdateOneWithoutReviewCommentMoodNestedInput {

    @Field(() => ReviewCreateWithoutReviewCommentMoodInput, {nullable:true})
    @Type(() => ReviewCreateWithoutReviewCommentMoodInput)
    create?: ReviewCreateWithoutReviewCommentMoodInput;

    @Field(() => ReviewCreateOrConnectWithoutReviewCommentMoodInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutReviewCommentMoodInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewCommentMoodInput;

    @Field(() => ReviewUpsertWithoutReviewCommentMoodInput, {nullable:true})
    @Type(() => ReviewUpsertWithoutReviewCommentMoodInput)
    upsert?: ReviewUpsertWithoutReviewCommentMoodInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: ReviewWhereUniqueInput;

    @Field(() => ReviewUpdateWithoutReviewCommentMoodInput, {nullable:true})
    @Type(() => ReviewUpdateWithoutReviewCommentMoodInput)
    update?: ReviewUpdateWithoutReviewCommentMoodInput;
}
