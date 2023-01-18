import * as NestJsGraphQL from "@nestjs/graphql";
import { StampCreateManyPlaceInput } from "../../stamp/inputs/StampCreateManyPlaceInput.input";

@NestJsGraphQL.InputType('StampCreateManyPlaceInputEnvelope', { isAbstract: true })
export class StampCreateManyPlaceInputEnvelope {
  @NestJsGraphQL.Field(() => [StampCreateManyPlaceInput])
  data!: StampCreateManyPlaceInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
