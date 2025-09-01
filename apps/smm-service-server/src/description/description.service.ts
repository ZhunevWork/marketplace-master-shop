import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DescriptionServiceBase } from "./base/description.service.base";

@Injectable()
export class DescriptionService extends DescriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
