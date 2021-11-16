import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ApiValidationPipe } from '@libs/core/pipes/api-validation.pipe';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });

    const options = new DocumentBuilder()
        .setTitle('{{cookiecutter.project_name}}')
        .setDescription('The documentation of the REST API of {{cookiecutter.project_name}}')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    if (process.env.NODE_ENV !== 'production') {
        SwaggerModule.setup('docs', app, document);
    }

    // Format DTO errors
    app.useGlobalPipes(ApiValidationPipe);

    await app.listen(3000);
}
bootstrap();
