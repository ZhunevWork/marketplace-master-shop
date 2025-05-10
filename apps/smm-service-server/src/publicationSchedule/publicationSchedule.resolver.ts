import * as graphql from "@nestjs/graphql";
import { PublicationScheduleResolverBase } from "./base/publicationSchedule.resolver.base";
import { PublicationSchedule } from "./base/PublicationSchedule";
import { PublicationScheduleService } from "./publicationSchedule.service";

@graphql.Resolver(() => PublicationSchedule)
export class PublicationScheduleResolver extends PublicationScheduleResolverBase {
  constructor(protected readonly service: PublicationScheduleService) {
    super(service);
  }
}
