import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewCommentsInput } from './user-create-without-review-comments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewCommentsInput } from './user-create-or-connect-without-review-comments.input';
import { UserUpsertWithoutReviewCommentsInput } from './user-upsert-without-review-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutReviewCommentsInput } from './user-update-without-review-comments.input';

@InputType()
export class UserUpdateOneWithoutReviewCommentsNestedInput {

    @Field(() => UserCreateWithoutReviewCommentsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewCommentsInput)
    create?: UserCreateWithoutReviewCommentsInput;

    @Field(() => UserCreateOrConnectWithoutReviewCommentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewCommentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewCommentsInput;

    @Field(() => UserUpsertWithoutReviewCommentsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReviewCommentsInput)
    upsert?: UserUpsertWithoutReviewCommentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutReviewCommentsInput, {nullable:true})
    @Type(() => UserUpdateWithoutReviewCommentsInput)
    update?: UserUpdateWithoutReviewCommentsInput;
}
