import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { BaseHelper } from 'src/common/utils/helper';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserDto, GetUserByIdDto, UpdateUserIdDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private userRepository: Repository<UserEntity>;
  //   inject the Datasource provider
  constructor(private dataSource: DataSource) {
    // get users table repository to interact with the database
    this.userRepository = this.dataSource.getRepository(UserEntity);
  }
  //  create handler to create new user and save to the database
  async createUser(createUser: CreateUserDto): Promise<UserEntity> {
    try {
      const { password } = createUser;
      const hashedPassword = await BaseHelper.hashData(password);
      const user = this.userRepository.create({
        ...createUser,
        password: hashedPassword,
      });
      return await this.userRepository.save(user);
    } catch (err) {
      if (err.code == 23505) {
        throw new HttpException('User already exists', HttpStatus.CONFLICT);
      }
      console.log(err);
      throw new InternalServerErrorException(
        'Something went wrong, Try again!',
      );
    }
  }

  //   get a user from the database
  async getUser(body: GetUserByIdDto): Promise<UserEntity> {
    const { id } = body;
    return await this.userRepository.findOne({
      where: { id: id as unknown as string },
    });
  }

  //   get all users from the database
  async getUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  //   update a user in the database
  async updateUser(
    body: UpdateUserIdDto,
    user: UpdateUserDto,
  ): Promise<UpdateResult> {
    const { id } = body;
    const userToUpdate = await this.userRepository.findOne({
      where: { id: id as unknown as string },
    });
    if (!userToUpdate) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return await this.userRepository.update({ id }, user);
  }

  //   delete a user from the database
  async deleteUser(body: DeleteUserDto): Promise<DeleteResult> {
    const { id } = body;
    return await this.userRepository.delete(id);
  }
}
