import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodCreateWithoutUserInput } from './review-mood-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewMoodCreateOrConnectWithoutUserInput } from './review-mood-create-or-connect-without-user.input';
import { ReviewMoodCreateManyUserInputEnvelope } from './review-mood-create-many-user-input-envelope.input';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';

@InputType()
export class ReviewMoodCreateNestedManyWithoutUserInput {

    @Field(() => [ReviewMoodCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewMoodCreateWithoutUserInput)
    create?: Array<ReviewMoodCreateWithoutUserInput>;

    @Field(() => [ReviewMoodCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewMoodCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewMoodCreateOrConnectWithoutUserInput>;

    @Field(() => ReviewMoodCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewMoodCreateManyUserInputEnvelope)
    createMany?: ReviewMoodCreateManyUserInputEnvelope;

    @Field(() => [ReviewMoodWhereUniqueInput], {nullable:true})
    @Type(() => ReviewMoodWhereUniqueInput)
    connect?: Array<ReviewMoodWhereUniqueInput>;
}
