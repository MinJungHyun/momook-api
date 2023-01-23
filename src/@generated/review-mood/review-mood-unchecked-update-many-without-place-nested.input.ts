import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodCreateWithoutPlaceInput } from './review-mood-create-without-place.input';
import { Type } from 'class-transformer';
import { ReviewMoodCreateOrConnectWithoutPlaceInput } from './review-mood-create-or-connect-without-place.input';
import { ReviewMoodUpsertWithWhereUniqueWithoutPlaceInput } from './review-mood-upsert-with-where-unique-without-place.input';
import { ReviewMoodCreateManyPlaceInputEnvelope } from './review-mood-create-many-place-input-envelope.input';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { ReviewMoodUpdateWithWhereUniqueWithoutPlaceInput } from './review-mood-update-with-where-unique-without-place.input';
import { ReviewMoodUpdateManyWithWhereWithoutPlaceInput } from './review-mood-update-many-with-where-without-place.input';
import { ReviewMoodScalarWhereInput } from './review-mood-scalar-where.input';

@InputType()
export class ReviewMoodUncheckedUpdateManyWithoutPlaceNestedInput {

    @Field(() => [ReviewMoodCreateWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewMoodCreateWithoutPlaceInput)
    create?: Array<ReviewMoodCreateWithoutPlaceInput>;

    @Field(() => [ReviewMoodCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewMoodCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<ReviewMoodCreateOrConnectWithoutPlaceInput>;

    @Field(() => [ReviewMoodUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewMoodUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<ReviewMoodUpsertWithWhereUniqueWithoutPlaceInput>;

    @Field(() => ReviewMoodCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => ReviewMoodCreateManyPlaceInputEnvelope)
    createMany?: ReviewMoodCreateManyPlaceInputEnvelope;

    @Field(() => [ReviewMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewMoodWhereUniqueInput)
    set?: Array<ReviewMoodWhereUniqueInput>;

    @Field(() => [ReviewMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewMoodWhereUniqueInput)
    disconnect?: Array<ReviewMoodWhereUniqueInput>;

    @Field(() => [ReviewMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewMoodWhereUniqueInput)
    delete?: Array<ReviewMoodWhereUniqueInput>;

    @Field(() => [ReviewMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewMoodWhereUniqueInput)
    connect?: Array<ReviewMoodWhereUniqueInput>;

    @Field(() => [ReviewMoodUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewMoodUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<ReviewMoodUpdateWithWhereUniqueWithoutPlaceInput>;

    @Field(() => [ReviewMoodUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewMoodUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<ReviewMoodUpdateManyWithWhereWithoutPlaceInput>;

    @Field(() => [ReviewMoodScalarWhereInput], {nullable:true})
    @Type(() => ReviewMoodScalarWhereInput)
    deleteMany?: Array<ReviewMoodScalarWhereInput>;
}
