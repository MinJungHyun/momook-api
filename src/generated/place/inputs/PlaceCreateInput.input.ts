import * as NestJsGraphQL from "@nestjs/graphql";
import { Gender } from "../../common/enums";
import { StampCreateNestedManyWithoutPlaceInput } from "../../stamp/inputs/StampCreateNestedManyWithoutPlaceInput.input";

@NestJsGraphQL.InputType('PlaceCreateInput', { isAbstract: true })
export class PlaceCreateInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Gender)
  gender!: "man" | "woman";

  @NestJsGraphQL.Field(() => StampCreateNestedManyWithoutPlaceInput, { nullable: true })
  stamps?: StampCreateNestedManyWithoutPlaceInput | undefined;
}
