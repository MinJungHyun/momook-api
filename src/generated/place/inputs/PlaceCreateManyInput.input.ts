import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "../../common/enums";

@NestJsGraphQL.InputType('PlaceCreateManyInput', { isAbstract: true })
export class PlaceCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Gender)
  gender!: "man" | "woman";
}
