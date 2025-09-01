import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SocialNetworkServiceBase } from "./base/socialNetwork.service.base";

@Injectable()
export class SocialNetworkService extends SocialNetworkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
