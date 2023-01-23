import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutReviewCommentMoodsInput } from './place-create-without-review-comment-moods.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutReviewCommentMoodsInput } from './place-create-or-connect-without-review-comment-moods.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';

@InputType()
export class PlaceCreateNestedOneWithoutReviewCommentMoodsInput {

    @Field(() => PlaceCreateWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutReviewCommentMoodsInput)
    create?: PlaceCreateWithoutReviewCommentMoodsInput;

    @Field(() => PlaceCreateOrConnectWithoutReviewCommentMoodsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutReviewCommentMoodsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutReviewCommentMoodsInput;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;
}
