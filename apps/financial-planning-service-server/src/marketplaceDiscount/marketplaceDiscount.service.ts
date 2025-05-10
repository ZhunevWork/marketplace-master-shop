import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketplaceDiscountServiceBase } from "./base/marketplaceDiscount.service.base";

@Injectable()
export class MarketplaceDiscountService extends MarketplaceDiscountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
