import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UrgencyServiceBase } from "./base/urgency.service.base";

@Injectable()
export class UrgencyService extends UrgencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
