import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Place } from '../place/place.model';
import { Int } from '@nestjs/graphql';
import { Review } from '../review/review.model';
import { User } from '../user/user.model';
import { ReviewCommentMood } from '../review-comment-mood/review-comment-mood.model';
import { ReviewCommentCount } from '../review/review-comment-count.output';

@ObjectType()
export class ReviewComment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    content!: string;

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

    @Field(() => Review, {nullable:true})
    review?: Review | null;

    @Field(() => Int, {nullable:true})
    reviewId!: number | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => [ReviewCommentMood], {nullable:true})
    reviewCommentMoods?: Array<ReviewCommentMood>;

    @Field(() => ReviewCommentCount, {nullable:false})
    _count?: ReviewCommentCount;
}
