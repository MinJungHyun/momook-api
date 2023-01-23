import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewCommentsInput } from './user-create-without-review-comments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewCommentsInput } from './user-create-or-connect-without-review-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReviewCommentsInput {

    @Field(() => UserCreateWithoutReviewCommentsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewCommentsInput)
    create?: UserCreateWithoutReviewCommentsInput;

    @Field(() => UserCreateOrConnectWithoutReviewCommentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewCommentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewCommentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
