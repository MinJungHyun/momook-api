import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutReviewCommentMoodInput } from './review-create-without-review-comment-mood.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutReviewCommentMoodInput } from './review-create-or-connect-without-review-comment-mood.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedOneWithoutReviewCommentMoodInput {

    @Field(() => ReviewCreateWithoutReviewCommentMoodInput, {nullable:true})
    @Type(() => ReviewCreateWithoutReviewCommentMoodInput)
    create?: ReviewCreateWithoutReviewCommentMoodInput;

    @Field(() => ReviewCreateOrConnectWithoutReviewCommentMoodInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutReviewCommentMoodInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewCommentMoodInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: ReviewWhereUniqueInput;
}
