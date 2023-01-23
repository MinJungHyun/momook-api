import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewCommentsInput } from './user-create-without-review-comments.input';

@InputType()
export class UserCreateOrConnectWithoutReviewCommentsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutReviewCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewCommentsInput)
    create!: UserCreateWithoutReviewCommentsInput;
}
