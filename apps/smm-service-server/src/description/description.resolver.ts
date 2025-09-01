import * as graphql from "@nestjs/graphql";
import { DescriptionResolverBase } from "./base/description.resolver.base";
import { Description } from "./base/Description";
import { DescriptionService } from "./description.service";

@graphql.Resolver(() => Description)
export class DescriptionResolver extends DescriptionResolverBase {
  constructor(protected readonly service: DescriptionService) {
    super(service);
  }
}
