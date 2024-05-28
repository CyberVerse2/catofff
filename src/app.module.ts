import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/user/user.entity';
import { config } from 'dotenv';
import { ENVIRONMENT } from './common/configs/environment';
config();

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: ENVIRONMENT.DB.HOST,
      port: ENVIRONMENT.DB.PORT,
      username: ENVIRONMENT.DB.USERNAME,
      password: ENVIRONMENT.DB.PASSWORD,
      database: ENVIRONMENT.DB.NAME,
      synchronize: true,
      entities: [UserEntity],
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
