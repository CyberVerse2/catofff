import { ConflictException, Injectable } from '@nestjs/common';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { WalletAddressEntity } from './walletaddress.entity';

@Injectable()
export class WalletAddressService {
  private walletRepository: Repository<WalletAddressEntity>;
  constructor(private dataSource: DataSource) {
    this.walletRepository = this.dataSource.getRepository(WalletAddressEntity);
  }

  //   create handler to create new wallet and save to the database
  async createWallet(address: string): Promise<WalletAddressEntity> {
    try {
      const wallet = this.walletRepository.create({ address });
      return await this.walletRepository.save(wallet);
    } catch (err) {
      if (err.code == 23505) {
        throw new ConflictException('Wallet already exists');
      }
    }
  }
  async getWallets(): Promise<WalletAddressEntity[]> {
    return await this.walletRepository.find();
  }

  //   get a wallet from the database
  async getWallet(address: string): Promise<WalletAddressEntity> {
    return await this.walletRepository.findOne({
      where: { address: address },
    });
  }

  //   update a wallet in the database
  async updateWallet(id: string, address: string): Promise<UpdateResult> {
    return await this.walletRepository.update(id, { address: address });
  }

  //  delete a wallet from the database
  async deleteWallet(id: string): Promise<void> {
    await this.walletRepository.delete(id);
  }
}
