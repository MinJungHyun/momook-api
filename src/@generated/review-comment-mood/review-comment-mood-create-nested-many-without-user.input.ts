import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateWithoutUserInput } from './review-comment-mood-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateOrConnectWithoutUserInput } from './review-comment-mood-create-or-connect-without-user.input';
import { ReviewCommentMoodCreateManyUserInputEnvelope } from './review-comment-mood-create-many-user-input-envelope.input';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';

@InputType()
export class ReviewCommentMoodCreateNestedManyWithoutUserInput {

    @Field(() => [ReviewCommentMoodCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateWithoutUserInput)
    create?: Array<ReviewCommentMoodCreateWithoutUserInput>;

    @Field(() => [ReviewCommentMoodCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCommentMoodCreateOrConnectWithoutUserInput>;

    @Field(() => ReviewCommentMoodCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentMoodCreateManyUserInputEnvelope)
    createMany?: ReviewCommentMoodCreateManyUserInputEnvelope;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    connect?: Array<ReviewCommentMoodWhereUniqueInput>;
}
