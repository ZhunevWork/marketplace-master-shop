import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SocialNetworkService } from "./socialNetwork.service";
import { SocialNetworkControllerBase } from "./base/socialNetwork.controller.base";

@swagger.ApiTags("socialNetworks")
@common.Controller("socialNetworks")
export class SocialNetworkController extends SocialNetworkControllerBase {
  constructor(protected readonly service: SocialNetworkService) {
    super(service);
  }
}
