import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateWithoutUserInput } from './review-comment-mood-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateOrConnectWithoutUserInput } from './review-comment-mood-create-or-connect-without-user.input';
import { ReviewCommentMoodUpsertWithWhereUniqueWithoutUserInput } from './review-comment-mood-upsert-with-where-unique-without-user.input';
import { ReviewCommentMoodCreateManyUserInputEnvelope } from './review-comment-mood-create-many-user-input-envelope.input';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { ReviewCommentMoodUpdateWithWhereUniqueWithoutUserInput } from './review-comment-mood-update-with-where-unique-without-user.input';
import { ReviewCommentMoodUpdateManyWithWhereWithoutUserInput } from './review-comment-mood-update-many-with-where-without-user.input';
import { ReviewCommentMoodScalarWhereInput } from './review-comment-mood-scalar-where.input';

@InputType()
export class ReviewCommentMoodUpdateManyWithoutUserNestedInput {

    @Field(() => [ReviewCommentMoodCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateWithoutUserInput)
    create?: Array<ReviewCommentMoodCreateWithoutUserInput>;

    @Field(() => [ReviewCommentMoodCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCommentMoodCreateOrConnectWithoutUserInput>;

    @Field(() => [ReviewCommentMoodUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReviewCommentMoodUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReviewCommentMoodCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentMoodCreateManyUserInputEnvelope)
    createMany?: ReviewCommentMoodCreateManyUserInputEnvelope;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    set?: Array<ReviewCommentMoodWhereUniqueInput>;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    disconnect?: Array<ReviewCommentMoodWhereUniqueInput>;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    delete?: Array<ReviewCommentMoodWhereUniqueInput>;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    connect?: Array<ReviewCommentMoodWhereUniqueInput>;

    @Field(() => [ReviewCommentMoodUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReviewCommentMoodUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReviewCommentMoodUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReviewCommentMoodUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReviewCommentMoodScalarWhereInput], {nullable:true})
    @Type(() => ReviewCommentMoodScalarWhereInput)
    deleteMany?: Array<ReviewCommentMoodScalarWhereInput>;
}
