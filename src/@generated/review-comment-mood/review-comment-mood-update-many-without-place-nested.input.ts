import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateWithoutPlaceInput } from './review-comment-mood-create-without-place.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateOrConnectWithoutPlaceInput } from './review-comment-mood-create-or-connect-without-place.input';
import { ReviewCommentMoodUpsertWithWhereUniqueWithoutPlaceInput } from './review-comment-mood-upsert-with-where-unique-without-place.input';
import { ReviewCommentMoodCreateManyPlaceInputEnvelope } from './review-comment-mood-create-many-place-input-envelope.input';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';
import { ReviewCommentMoodUpdateWithWhereUniqueWithoutPlaceInput } from './review-comment-mood-update-with-where-unique-without-place.input';
import { ReviewCommentMoodUpdateManyWithWhereWithoutPlaceInput } from './review-comment-mood-update-many-with-where-without-place.input';
import { ReviewCommentMoodScalarWhereInput } from './review-comment-mood-scalar-where.input';

@InputType()
export class ReviewCommentMoodUpdateManyWithoutPlaceNestedInput {

    @Field(() => [ReviewCommentMoodCreateWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateWithoutPlaceInput)
    create?: Array<ReviewCommentMoodCreateWithoutPlaceInput>;

    @Field(() => [ReviewCommentMoodCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<ReviewCommentMoodCreateOrConnectWithoutPlaceInput>;

    @Field(() => [ReviewCommentMoodUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<ReviewCommentMoodUpsertWithWhereUniqueWithoutPlaceInput>;

    @Field(() => ReviewCommentMoodCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentMoodCreateManyPlaceInputEnvelope)
    createMany?: ReviewCommentMoodCreateManyPlaceInputEnvelope;

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

    @Field(() => [ReviewCommentMoodUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<ReviewCommentMoodUpdateWithWhereUniqueWithoutPlaceInput>;

    @Field(() => [ReviewCommentMoodUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentMoodUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<ReviewCommentMoodUpdateManyWithWhereWithoutPlaceInput>;

    @Field(() => [ReviewCommentMoodScalarWhereInput], {nullable:true})
    @Type(() => ReviewCommentMoodScalarWhereInput)
    deleteMany?: Array<ReviewCommentMoodScalarWhereInput>;
}
