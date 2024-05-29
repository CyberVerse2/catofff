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
import { WalletaddressModule } from './walletaddress/walletaddress.module';
import { WalletAddressEntity } from './walletaddress/walletaddress.entity';
config();

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: ENVIRONMENT.DB.URL,
      synchronize: true,
      entities: [UserEntity, WalletAddressEntity],
    }),
    WalletaddressModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
