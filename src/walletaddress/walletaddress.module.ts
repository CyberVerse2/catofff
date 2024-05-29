import { Module } from '@nestjs/common';
import { WalletAddressController } from './walletaddress.controller';
import { WalletAddressService } from './walletaddress.service';

@Module({
  controllers: [WalletAddressController],
  providers: [WalletAddressService],
})
export class WalletaddressModule {}
