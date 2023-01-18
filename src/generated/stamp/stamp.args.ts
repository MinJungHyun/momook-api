import * as NestJsGraphQL from "@nestjs/graphql";
import { StampScalarFieldEnum } from "../common/enums";
import { StampCreateInput } from "../stamp/inputs/StampCreateInput.input";
import { StampCreateManyInput } from "../stamp/inputs/StampCreateManyInput.input";
import { StampOrderByWithAggregationInput } from "../stamp/inputs/StampOrderByWithAggregationInput.input";
import { StampOrderByWithRelationInput } from "../stamp/inputs/StampOrderByWithRelationInput.input";
import { StampScalarWhereWithAggregatesInput } from "../stamp/inputs/StampScalarWhereWithAggregatesInput.input";
import { StampUpdateInput } from "../stamp/inputs/StampUpdateInput.input";
import { StampUpdateManyMutationInput } from "../stamp/inputs/StampUpdateManyMutationInput.input";
import { StampWhereInput } from "../stamp/inputs/StampWhereInput.input";
import { StampWhereUniqueInput } from "../stamp/inputs/StampWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateStampArgs {
  @NestJsGraphQL.Field(() => StampWhereInput, { nullable: true })
  where?: StampWhereInput | undefined;

  @NestJsGraphQL.Field(() => [StampOrderByWithRelationInput], { nullable: true })
  orderBy?: StampOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => StampWhereUniqueInput, { nullable: true })
  cursor?: StampWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyStampArgs {
  @NestJsGraphQL.Field(() => [StampCreateManyInput])
  data!: StampCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneStampArgs {
  @NestJsGraphQL.Field(() => StampCreateInput)
  data!: StampCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyStampArgs {
  @NestJsGraphQL.Field(() => StampWhereInput, { nullable: true })
  where?: StampWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneStampArgs {
  @NestJsGraphQL.Field(() => StampWhereUniqueInput)
  where!: StampWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstStampArgs {
  @NestJsGraphQL.Field(() => StampWhereInput, { nullable: true })
  where?: StampWhereInput | undefined;

  @NestJsGraphQL.Field(() => [StampOrderByWithRelationInput], { nullable: true })
  orderBy?: StampOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => StampWhereUniqueInput, { nullable: true })
  cursor?: StampWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [StampScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "count" | "mealType" | "errorType" | "placeId"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyStampArgs {
  @NestJsGraphQL.Field(() => StampWhereInput, { nullable: true })
  where?: StampWhereInput | undefined;

  @NestJsGraphQL.Field(() => [StampOrderByWithRelationInput], { nullable: true })
  orderBy?: StampOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => StampWhereUniqueInput, { nullable: true })
  cursor?: StampWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [StampScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "count" | "mealType" | "errorType" | "placeId"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueStampArgs {
  @NestJsGraphQL.Field(() => StampWhereUniqueInput)
  where!: StampWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByStampArgs {
  @NestJsGraphQL.Field(() => StampWhereInput, { nullable: true })
  where?: StampWhereInput | undefined;

  @NestJsGraphQL.Field(() => [StampOrderByWithAggregationInput], { nullable: true })
  orderBy?: StampOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [StampScalarFieldEnum])
  by!: Array<"id" | "count" | "mealType" | "errorType" | "placeId">;

  @NestJsGraphQL.Field(() => StampScalarWhereWithAggregatesInput, { nullable: true })
  having?: StampScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyStampArgs {
  @NestJsGraphQL.Field(() => StampUpdateManyMutationInput)
  data!: StampUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => StampWhereInput, { nullable: true })
  where?: StampWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneStampArgs {
  @NestJsGraphQL.Field(() => StampUpdateInput)
  data!: StampUpdateInput;

  @NestJsGraphQL.Field(() => StampWhereUniqueInput)
  where!: StampWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneStampArgs {
  @NestJsGraphQL.Field(() => StampWhereUniqueInput)
  where!: StampWhereUniqueInput;

  @NestJsGraphQL.Field(() => StampCreateInput)
  create!: StampCreateInput;

  @NestJsGraphQL.Field(() => StampUpdateInput)
  update!: StampUpdateInput;
}
