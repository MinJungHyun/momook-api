import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Place } from '../place/place.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { ReviewComment } from '../review-comment/review-comment.model';
import { ReviewMood } from '../review-mood/review-mood.model';
import { ReviewCommentMood } from '../review-comment-mood/review-comment-mood.model';
import { ReviewCount } from './review-count.output';

@ObjectType()
export class Review {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => Float, {nullable:false})
    point!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Place, {nullable:true})
    place?: Place | null;

    @Field(() => Int, {nullable:true})
    placeId!: number | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => [ReviewComment], {nullable:true})
    reviewComments?: Array<ReviewComment>;

    @Field(() => [ReviewMood], {nullable:true})
    reviewMoods?: Array<ReviewMood>;

    @Field(() => [ReviewCommentMood], {nullable:true})
    ReviewCommentMood?: Array<ReviewCommentMood>;

    @Field(() => ReviewCount, {nullable:false})
    _count?: ReviewCount;
}
