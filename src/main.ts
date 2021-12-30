require("dotenv").config();
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MongoDBConect } from "./module/MondoDBAdapter/infra";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await MongoDBConect.startMongo();
  await app.listen(3000);
}
bootstrap();
