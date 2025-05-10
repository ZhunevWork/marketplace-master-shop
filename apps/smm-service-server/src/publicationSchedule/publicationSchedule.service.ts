import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PublicationScheduleServiceBase } from "./base/publicationSchedule.service.base";

@Injectable()
export class PublicationScheduleService extends PublicationScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
