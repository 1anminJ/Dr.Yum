import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. CORS 설정 먼저!
  app.enableCors({
    origin: 'http://localhost:5173', 
    credentials: true,
  });

  // 2. 그 다음에 서버 실행
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
