import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodCreateWithoutUserInput } from './review-mood-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewMoodCreateOrConnectWithoutUserInput } from './review-mood-create-or-connect-without-user.input';
import { ReviewMoodUpsertWithWhereUniqueWithoutUserInput } from './review-mood-upsert-with-where-unique-without-user.input';
import { ReviewMoodCreateManyUserInputEnvelope } from './review-mood-create-many-user-input-envelope.input';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { ReviewMoodUpdateWithWhereUniqueWithoutUserInput } from './review-mood-update-with-where-unique-without-user.input';
import { ReviewMoodUpdateManyWithWhereWithoutUserInput } from './review-mood-update-many-with-where-without-user.input';
import { ReviewMoodScalarWhereInput } from './review-mood-scalar-where.input';

@InputType()
export class ReviewMoodUpdateManyWithoutUserNestedInput {

    @Field(() => [ReviewMoodCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewMoodCreateWithoutUserInput)
    create?: Array<ReviewMoodCreateWithoutUserInput>;

    @Field(() => [ReviewMoodCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewMoodCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewMoodCreateOrConnectWithoutUserInput>;

    @Field(() => [ReviewMoodUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewMoodUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReviewMoodUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReviewMoodCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewMoodCreateManyUserInputEnvelope)
    createMany?: ReviewMoodCreateManyUserInputEnvelope;

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

    @Field(() => [ReviewMoodUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewMoodUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReviewMoodUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReviewMoodUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReviewMoodUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReviewMoodUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReviewMoodScalarWhereInput], {nullable:true})
    @Type(() => ReviewMoodScalarWhereInput)
    deleteMany?: Array<ReviewMoodScalarWhereInput>;
}
