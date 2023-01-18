import * as NestJsGraphQL from "@nestjs/graphql";
import { StampWhereInput } from "../../stamp/inputs/StampWhereInput.input";

@NestJsGraphQL.InputType('StampListRelationFilter', { isAbstract: true })
export class StampListRelationFilter {
  @NestJsGraphQL.Field(() => StampWhereInput, { nullable: true })
  every?: StampWhereInput | undefined;

  @NestJsGraphQL.Field(() => StampWhereInput, { nullable: true })
  some?: StampWhereInput | undefined;

  @NestJsGraphQL.Field(() => StampWhereInput, { nullable: true })
  none?: StampWhereInput | undefined;
}
