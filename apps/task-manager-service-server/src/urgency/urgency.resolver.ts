import * as graphql from "@nestjs/graphql";
import { UrgencyResolverBase } from "./base/urgency.resolver.base";
import { Urgency } from "./base/Urgency";
import { UrgencyService } from "./urgency.service";

@graphql.Resolver(() => Urgency)
export class UrgencyResolver extends UrgencyResolverBase {
  constructor(protected readonly service: UrgencyService) {
    super(service);
  }
}
