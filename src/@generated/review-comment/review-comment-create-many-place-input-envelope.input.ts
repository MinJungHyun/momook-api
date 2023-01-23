import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCommentCreateManyPlaceInput } from './review-comment-create-many-place.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCommentCreateManyPlaceInputEnvelope {

    @Field(() => [ReviewCommentCreateManyPlaceInput], {nullable:false})
    @Type(() => ReviewCommentCreateManyPlaceInput)
    data!: Array<ReviewCommentCreateManyPlaceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
