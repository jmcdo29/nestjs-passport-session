import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      name: 'id',
      cookie: {
        sameSite: false,
        httpOnly: false,
        maxAge: 86400,
        secure: false
      },
    }),
    passport.initialize(),
    passport.session(),
  );
  await app.listen(process.env.PORT);
  console.log(`App listening at ${await app.getUrl()}`);
}
bootstrap();
