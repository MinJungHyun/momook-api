import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutReviewCommentMoodsInput } from './place-create-without-review-comment-moods.input';

@InputType()
export class PlaceCreateOrConnectWithoutReviewCommentMoodsInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: PlaceWhereUniqueInput;

    @Field(() => PlaceCreateWithoutReviewCommentMoodsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutReviewCommentMoodsInput)
    create!: PlaceCreateWithoutReviewCommentMoodsInput;
}
