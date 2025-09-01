import { Module } from "@nestjs/common";
import { SocialNetworkModuleBase } from "./base/socialNetwork.module.base";
import { SocialNetworkService } from "./socialNetwork.service";
import { SocialNetworkController } from "./socialNetwork.controller";
import { SocialNetworkResolver } from "./socialNetwork.resolver";

@Module({
  imports: [SocialNetworkModuleBase],
  controllers: [SocialNetworkController],
  providers: [SocialNetworkService, SocialNetworkResolver],
  exports: [SocialNetworkService],
})
export class SocialNetworkModule {}
