import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WalletAddressService } from './walletaddress.service';
import { ResponseMessage } from 'src/common/decorators/response.decorator';

@Controller('walletaddresses')
export class WalletAddressController {
  constructor(private walletAddressService: WalletAddressService) {}

  //   handles the post request to /walletaddress endpoint to create new walletaddress
  @Post('/create')
  @ResponseMessage('Wallet Created Successfully')
  async createWallet(@Body('address') address: string) {
    return await this.walletAddressService.createWallet(address);
  }

  //   handles the get request to /walletaddress endpoint to get all walletaddress
  @Get('/')
  @ResponseMessage('All Wallets Fetched Successfully')
  async getWallets() {
    return await this.walletAddressService.getWallets();
  }

  //   handles the get request to /walletaddress/:address endpoint to get a walletaddress
  @Get('/:address')
  @ResponseMessage('Wallet Fetched Successfully')
  async getWallet(@Param('address') address: string) {
    return await this.walletAddressService.getWallet(address);
  }

  //   handles the put request to /walletaddress/:id endpoint to update a walletaddress
  @Put(':id')
  @ResponseMessage('Wallet Updated Successfully')
  async updateWallet(
    @Param('id') id: string,
    @Body('address') address: string,
  ) {
    await this.walletAddressService.updateWallet(id, address);
  }

  //   handles the delete request to /walletaddress/:id endpoint to delete a walletaddress
  @Delete(':id')
  @ResponseMessage('Wallet Deleted Successfully')
  async deleteWallet(@Param('id') id: string) {
    await this.walletAddressService.deleteWallet(id);
  }
}
