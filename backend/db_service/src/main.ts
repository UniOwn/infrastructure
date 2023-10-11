import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();
    const logger = new Logger();
    const configService = app.get(ConfigService);

    const options = new DocumentBuilder().setTitle("Uniown Backend").setVersion("1.0").build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup("api", app, document);

    const port = configService.get("PORT") || 3000;

    await app.listen(port, () => {
        logger.log(`Server is running on port ${port}`);
    });
}
bootstrap();
