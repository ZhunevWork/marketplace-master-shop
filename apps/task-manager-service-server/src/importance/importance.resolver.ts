import * as graphql from "@nestjs/graphql";
import { ImportanceResolverBase } from "./base/importance.resolver.base";
import { Importance } from "./base/Importance";
import { ImportanceService } from "./importance.service";

@graphql.Resolver(() => Importance)
export class ImportanceResolver extends ImportanceResolverBase {
  constructor(protected readonly service: ImportanceService) {
    super(service);
  }
}
