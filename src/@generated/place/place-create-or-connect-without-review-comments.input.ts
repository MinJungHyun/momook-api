import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceCreateWithoutReviewCommentsInput } from './place-create-without-review-comments.input';

@InputType()
export class PlaceCreateOrConnectWithoutReviewCommentsInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: PlaceWhereUniqueInput;

    @Field(() => PlaceCreateWithoutReviewCommentsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutReviewCommentsInput)
    create!: PlaceCreateWithoutReviewCommentsInput;
}
