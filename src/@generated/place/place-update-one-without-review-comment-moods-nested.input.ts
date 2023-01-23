import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutReviewCommentMoodsInput } from './place-create-without-review-comment-moods.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutReviewCommentMoodsInput } from './place-create-or-connect-without-review-comment-moods.input';
import { PlaceUpsertWithoutReviewCommentMoodsInput } from './place-upsert-without-review-comment-moods.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { PlaceUpdateWithoutReviewCommentMoodsInput } from './place-update-without-review-comment-moods.input';

@InputType()
export class PlaceUpdateOneWithoutReviewCommentMoodsNestedInput {

    @Field(() => PlaceCreateWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutReviewCommentMoodsInput)
    create?: PlaceCreateWithoutReviewCommentMoodsInput;

    @Field(() => PlaceCreateOrConnectWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutReviewCommentMoodsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutReviewCommentMoodsInput;

    @Field(() => PlaceUpsertWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => PlaceUpsertWithoutReviewCommentMoodsInput)
    upsert?: PlaceUpsertWithoutReviewCommentMoodsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;

    @Field(() => PlaceUpdateWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => PlaceUpdateWithoutReviewCommentMoodsInput)
    update?: PlaceUpdateWithoutReviewCommentMoodsInput;
}
