import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalePriceServiceBase } from "./base/salePrice.service.base";

@Injectable()
export class SalePriceService extends SalePriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
