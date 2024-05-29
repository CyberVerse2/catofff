import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('walletaddress')
export class WalletAddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  address: string;
}
