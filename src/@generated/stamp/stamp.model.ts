import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MealType } from '../prisma/meal-type.enum';
import { Place } from '../place/place.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Stamp {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => MealType, {nullable:false,defaultValue:'breakfast'})
    mealType!: keyof typeof MealType;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

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
}
