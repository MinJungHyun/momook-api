import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentMoodCreateWithoutPlaceInput } from './review-comment-mood-create-without-place.input';
import { Type } from 'class-transformer';
import { ReviewCommentMoodCreateOrConnectWithoutPlaceInput } from './review-comment-mood-create-or-connect-without-place.input';
import { ReviewCommentMoodCreateManyPlaceInputEnvelope } from './review-comment-mood-create-many-place-input-envelope.input';
import { ReviewCommentMoodWhereUniqueInput } from './review-comment-mood-where-unique.input';

@InputType()
export class ReviewCommentMoodCreateNestedManyWithoutPlaceInput {

    @Field(() => [ReviewCommentMoodCreateWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateWithoutPlaceInput)
    create?: Array<ReviewCommentMoodCreateWithoutPlaceInput>;

    @Field(() => [ReviewCommentMoodCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCommentMoodCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<ReviewCommentMoodCreateOrConnectWithoutPlaceInput>;

    @Field(() => ReviewCommentMoodCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => ReviewCommentMoodCreateManyPlaceInputEnvelope)
    createMany?: ReviewCommentMoodCreateManyPlaceInputEnvelope;

    @Field(() => [ReviewCommentMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCommentMoodWhereUniqueInput)
    connect?: Array<ReviewCommentMoodWhereUniqueInput>;
}
