import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutReviewCommentsInput } from './place-create-without-review-comments.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutReviewCommentsInput } from './place-create-or-connect-without-review-comments.input';
import { PlaceUpsertWithoutReviewCommentsInput } from './place-upsert-without-review-comments.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { PlaceUpdateWithoutReviewCommentsInput } from './place-update-without-review-comments.input';

@InputType()
export class PlaceUpdateOneWithoutReviewCommentsNestedInput {

    @Field(() => PlaceCreateWithoutReviewCommentsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutReviewCommentsInput)
    create?: PlaceCreateWithoutReviewCommentsInput;

    @Field(() => PlaceCreateOrConnectWithoutReviewCommentsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutReviewCommentsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutReviewCommentsInput;

    @Field(() => PlaceUpsertWithoutReviewCommentsInput, {nullable:true})
    @Type(() => PlaceUpsertWithoutReviewCommentsInput)
    upsert?: PlaceUpsertWithoutReviewCommentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;

    @Field(() => PlaceUpdateWithoutReviewCommentsInput, {nullable:true})
    @Type(() => PlaceUpdateWithoutReviewCommentsInput)
    update?: PlaceUpdateWithoutReviewCommentsInput;
}
