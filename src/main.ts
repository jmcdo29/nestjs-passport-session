import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('NestApplication');
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        sameSite: false,
        httpOnly: false,
        maxAge: 86400 * 1000,
        secure: false,
      },
    }),
    passport.initialize(),
    passport.session(),
  );
  await app.listen(process.env.PORT);
  logger.log(`App listening at ${await app.getUrl()}`);
}
bootstrap();
