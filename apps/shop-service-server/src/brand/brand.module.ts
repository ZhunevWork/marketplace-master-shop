import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BrandModuleBase } from "./base/brand.module.base";
import { BrandService } from "./brand.service";
import { BrandController } from "./brand.controller";
import { BrandGrpcController } from "./brand.grpc.controller";
import { BrandResolver } from "./brand.resolver";

@Module({
  imports: [BrandModuleBase, forwardRef(() => AuthModule)],
  controllers: [BrandController, BrandGrpcController],
  providers: [BrandService, BrandResolver],
  exports: [BrandService],
})
export class BrandModule {}
