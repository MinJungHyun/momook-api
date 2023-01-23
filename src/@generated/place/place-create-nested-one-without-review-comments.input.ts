import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateWithoutReviewCommentsInput } from './place-create-without-review-comments.input';
import { Type } from 'class-transformer';
import { PlaceCreateOrConnectWithoutReviewCommentsInput } from './place-create-or-connect-without-review-comments.input';
import { PlaceWhereUniqueInput } from './place-where-unique.input';

@InputType()
export class PlaceCreateNestedOneWithoutReviewCommentsInput {

    @Field(() => PlaceCreateWithoutReviewCommentsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutReviewCommentsInput)
    create?: PlaceCreateWithoutReviewCommentsInput;

    @Field(() => PlaceCreateOrConnectWithoutReviewCommentsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutReviewCommentsInput)
    connectOrCreate?: PlaceCreateOrConnectWithoutReviewCommentsInput;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: PlaceWhereUniqueInput;
}
