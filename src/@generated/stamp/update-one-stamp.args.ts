import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StampUpdateInput } from './stamp-update.input';
import { Type } from 'class-transformer';
import { StampWhereUniqueInput } from './stamp-where-unique.input';

@ArgsType()
export class UpdateOneStampArgs {
  @Field(() => StampUpdateInput, { nullable: false })
  @Type(() => StampUpdateInput)
  data!: StampUpdateInput;

  @Field(() => StampWhereUniqueInput, { nullable: false })
  @Type(() => StampWhereUniqueInput)
  where!: StampWhereUniqueInput;
}
