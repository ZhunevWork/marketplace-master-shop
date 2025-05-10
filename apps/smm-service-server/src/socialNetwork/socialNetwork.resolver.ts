import * as graphql from "@nestjs/graphql";
import { SocialNetworkResolverBase } from "./base/socialNetwork.resolver.base";
import { SocialNetwork } from "./base/SocialNetwork";
import { SocialNetworkService } from "./socialNetwork.service";

@graphql.Resolver(() => SocialNetwork)
export class SocialNetworkResolver extends SocialNetworkResolverBase {
  constructor(protected readonly service: SocialNetworkService) {
    super(service);
  }
}
