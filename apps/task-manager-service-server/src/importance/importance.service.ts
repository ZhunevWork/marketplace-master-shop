import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImportanceServiceBase } from "./base/importance.service.base";

@Injectable()
export class ImportanceService extends ImportanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
