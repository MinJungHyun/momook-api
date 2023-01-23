import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewMoodWhereInput } from './review-mood-where.input';

@InputType()
export class ReviewMoodListRelationFilter {

    @Field(() => ReviewMoodWhereInput, {nullable:true})
    every?: ReviewMoodWhereInput;

    @Field(() => ReviewMoodWhereInput, {nullable:true})
    some?: ReviewMoodWhereInput;

    @Field(() => ReviewMoodWhereInput, {nullable:true})
    none?: ReviewMoodWhereInput;
}
