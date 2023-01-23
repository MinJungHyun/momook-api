import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewMoodWhereInput } from './review-mood-where.input';
import { Type } from 'class-transformer';
import { ReviewMoodOrderByWithRelationInput } from './review-mood-order-by-with-relation.input';
import { ReviewMoodWhereUniqueInput } from './review-mood-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewMoodScalarFieldEnum } from './review-mood-scalar-field.enum';

@ArgsType()
export class FindFirstReviewMoodArgs {

    @Field(() => ReviewMoodWhereInput, {nullable:true})
    @Type(() => ReviewMoodWhereInput)
    where?: ReviewMoodWhereInput;

    @Field(() => [ReviewMoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewMoodOrderByWithRelationInput>;

    @Field(() => ReviewMoodWhereUniqueInput, {nullable:true})
    cursor?: ReviewMoodWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewMoodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewMoodScalarFieldEnum>;
}
