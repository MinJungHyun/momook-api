import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutPlaceInput } from './review-create-without-place.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutPlaceInput } from './review-create-or-connect-without-place.input';
import { ReviewCreateManyPlaceInputEnvelope } from './review-create-many-place-input-envelope.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedManyWithoutPlaceInput {

    @Field(() => [ReviewCreateWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCreateWithoutPlaceInput)
    create?: Array<ReviewCreateWithoutPlaceInput>;

    @Field(() => [ReviewCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutPlaceInput>;

    @Field(() => ReviewCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyPlaceInputEnvelope)
    createMany?: ReviewCreateManyPlaceInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<ReviewWhereUniqueInput>;
}
