import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './_user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
  ],
})
export class AppModule {}
