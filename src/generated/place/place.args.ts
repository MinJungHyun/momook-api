import * as NestJsGraphQL from "@nestjs/graphql";
import { PlaceScalarFieldEnum } from "../common/enums";
import { PlaceCreateInput } from "../place/inputs/PlaceCreateInput.input";
import { PlaceCreateManyInput } from "../place/inputs/PlaceCreateManyInput.input";
import { PlaceOrderByWithAggregationInput } from "../place/inputs/PlaceOrderByWithAggregationInput.input";
import { PlaceOrderByWithRelationInput } from "../place/inputs/PlaceOrderByWithRelationInput.input";
import { PlaceScalarWhereWithAggregatesInput } from "../place/inputs/PlaceScalarWhereWithAggregatesInput.input";
import { PlaceUpdateInput } from "../place/inputs/PlaceUpdateInput.input";
import { PlaceUpdateManyMutationInput } from "../place/inputs/PlaceUpdateManyMutationInput.input";
import { PlaceWhereInput } from "../place/inputs/PlaceWhereInput.input";
import { PlaceWhereUniqueInput } from "../place/inputs/PlaceWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregatePlaceArgs {
  @NestJsGraphQL.Field(() => PlaceWhereInput, { nullable: true })
  where?: PlaceWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PlaceOrderByWithRelationInput], { nullable: true })
  orderBy?: PlaceOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PlaceWhereUniqueInput, { nullable: true })
  cursor?: PlaceWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyPlaceArgs {
  @NestJsGraphQL.Field(() => [PlaceCreateManyInput])
  data!: PlaceCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOnePlaceArgs {
  @NestJsGraphQL.Field(() => PlaceCreateInput)
  data!: PlaceCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyPlaceArgs {
  @NestJsGraphQL.Field(() => PlaceWhereInput, { nullable: true })
  where?: PlaceWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOnePlaceArgs {
  @NestJsGraphQL.Field(() => PlaceWhereUniqueInput)
  where!: PlaceWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstPlaceArgs {
  @NestJsGraphQL.Field(() => PlaceWhereInput, { nullable: true })
  where?: PlaceWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PlaceOrderByWithRelationInput], { nullable: true })
  orderBy?: PlaceOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PlaceWhereUniqueInput, { nullable: true })
  cursor?: PlaceWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [PlaceScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "gender"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyPlaceArgs {
  @NestJsGraphQL.Field(() => PlaceWhereInput, { nullable: true })
  where?: PlaceWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PlaceOrderByWithRelationInput], { nullable: true })
  orderBy?: PlaceOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PlaceWhereUniqueInput, { nullable: true })
  cursor?: PlaceWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [PlaceScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "gender"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniquePlaceArgs {
  @NestJsGraphQL.Field(() => PlaceWhereUniqueInput)
  where!: PlaceWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByPlaceArgs {
  @NestJsGraphQL.Field(() => PlaceWhereInput, { nullable: true })
  where?: PlaceWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PlaceOrderByWithAggregationInput], { nullable: true })
  orderBy?: PlaceOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [PlaceScalarFieldEnum])
  by!: Array<"id" | "name" | "gender">;

  @NestJsGraphQL.Field(() => PlaceScalarWhereWithAggregatesInput, { nullable: true })
  having?: PlaceScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyPlaceArgs {
  @NestJsGraphQL.Field(() => PlaceUpdateManyMutationInput)
  data!: PlaceUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => PlaceWhereInput, { nullable: true })
  where?: PlaceWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOnePlaceArgs {
  @NestJsGraphQL.Field(() => PlaceUpdateInput)
  data!: PlaceUpdateInput;

  @NestJsGraphQL.Field(() => PlaceWhereUniqueInput)
  where!: PlaceWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOnePlaceArgs {
  @NestJsGraphQL.Field(() => PlaceWhereUniqueInput)
  where!: PlaceWhereUniqueInput;

  @NestJsGraphQL.Field(() => PlaceCreateInput)
  create!: PlaceCreateInput;

  @NestJsGraphQL.Field(() => PlaceUpdateInput)
  update!: PlaceUpdateInput;
}
