import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Place } from '../place/place.model';
import { ReviewComment } from '../review-comment/review-comment.model';
import { Review } from '../review/review.model';
import { User } from '../user/user.model';

@ObjectType()
export class ReviewCommentMood {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Place, {nullable:true})
    place?: Place | null;

    @Field(() => Int, {nullable:true})
    placeId!: number | null;

    @Field(() => ReviewComment, {nullable:true})
    reviewComment?: ReviewComment | null;

    @Field(() => Int, {nullable:true})
    reviewCommentId!: number | null;

    @Field(() => Review, {nullable:true})
    review?: Review | null;

    @Field(() => Int, {nullable:true})
    reviewId!: number | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;
}
