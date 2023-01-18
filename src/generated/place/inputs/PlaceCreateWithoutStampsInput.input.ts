import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "../../common/enums";

@NestJsGraphQL.InputType('PlaceCreateWithoutStampsInput', { isAbstract: true })
export class PlaceCreateWithoutStampsInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Gender)
  gender!: "man" | "woman";
}
