"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'http://127.0.0.1:3000',
            'http://localhost:5173',
            'http://127.0.0.1:5173',
            'http://localhost:8080',
            'http://127.0.0.1:8080',
        ],
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Coffee Guard API')
        .setDescription('API para el sistema de monitoreo de broca del café')
        .setVersion('1.0')
        .addTag('auth', 'Autenticación y registro')
        .addTag('farmers', 'Gestión de agricultores')
        .addTag('traps', 'Gestión de trampas IoT')
        .addTag('alerts', 'Sistema de alertas')
        .addTag('reports', 'Reportes de problemas')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Ingresa tu token JWT',
        in: 'header',
    }, 'JWT-auth')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        customSiteTitle: 'Coffee Guard API Docs',
        customfavIcon: 'https://nestjs.com/img/logo_text.svg',
        customCss: '.swagger-ui .topbar { display: none }',
    });
    const port = process.env.PORT || 8080;
    await app.listen(port);
    console.log(`🚀 Coffee Guard API running on http://localhost:${port}/api`);
    console.log(`📚 Swagger documentation available at http://localhost:${port}/api/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map