import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PlaceMood } from '../place-mood/place-mood.model';
import { Review } from '../review/review.model';
import { ReviewComment } from '../review-comment/review-comment.model';
import { ReviewCommentMood } from '../review-comment-mood/review-comment-mood.model';
import { ReviewMood } from '../review-mood/review-mood.model';
import { Stamp } from '../stamp/stamp.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    socialType!: string | null;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [PlaceMood], {nullable:true})
    placeMoods?: Array<PlaceMood>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [ReviewComment], {nullable:true})
    reviewComments?: Array<ReviewComment>;

    @Field(() => [ReviewCommentMood], {nullable:true})
    reviewCommentMoods?: Array<ReviewCommentMood>;

    @Field(() => [ReviewMood], {nullable:true})
    reviewMoods?: Array<ReviewMood>;

    @Field(() => [Stamp], {nullable:true})
    stamps?: Array<Stamp>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
