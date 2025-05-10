import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchasePriceServiceBase } from "./base/purchasePrice.service.base";

@Injectable()
export class PurchasePriceService extends PurchasePriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
