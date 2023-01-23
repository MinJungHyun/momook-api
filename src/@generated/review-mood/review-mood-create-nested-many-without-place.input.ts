import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodCreateWithoutPlaceInput } from './review-mood-create-without-place.input';
import { Type } from 'class-transformer';
import { ReviewMoodCreateOrConnectWithoutPlaceInput } from './review-mood-create-or-connect-without-place.input';
import { ReviewMoodCreateManyPlaceInputEnvelope } from './review-mood-create-many-place-input-envelope.input';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';

@InputType()
export class ReviewMoodCreateNestedManyWithoutPlaceInput {

    @Field(() => [ReviewMoodCreateWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewMoodCreateWithoutPlaceInput)
    create?: Array<ReviewMoodCreateWithoutPlaceInput>;

    @Field(() => [ReviewMoodCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewMoodCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<ReviewMoodCreateOrConnectWithoutPlaceInput>;

    @Field(() => ReviewMoodCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => ReviewMoodCreateManyPlaceInputEnvelope)
    createMany?: ReviewMoodCreateManyPlaceInputEnvelope;

    @Field(() => [ReviewMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewMoodWhereUniqueInput)
    connect?: Array<ReviewMoodWhereUniqueInput>;
}
