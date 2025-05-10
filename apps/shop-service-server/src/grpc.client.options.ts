import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["category", "product", "brand", "user", "tenant"],
    protoPath: [
      "src/category/category.proto",
      "src/product/product.proto",
      "src/brand/brand.proto",
      "src/user/user.proto",
      "src/tenant/tenant.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
