import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto, GetUserByIdDto, UpdateUserIdDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseMessage } from 'src/common/decorators/response.decorator';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  @ResponseMessage('User Created Successfully')
  //   handles the post request to /users/create endpoint to create new user
  async create(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }

  @Get('/')
  @ResponseMessage('All Users Fetched Successfully')
  async getUsers() {
    //   handles the get request to /users endpoint to get all users
    return await this.userService.getUsers();
  }

  @Get(':id')
  @ResponseMessage('User Fetched Successfully')
  async getUser(@Param() id: GetUserByIdDto) {
    //   handles the get request to /users/:id endpoint to get a user
    return await this.userService.getUser(id);
  }

  @Put(':id')
  @ResponseMessage('User Updated Successfully')
  async updateUser(
    @Param() body: UpdateUserIdDto,
    @Body() user: UpdateUserDto,
  ) {
    //   handles the put request to /users/:id endpoint to update a user
    await this.userService.updateUser(body, user);
  }

  @Delete(':id')
  @ResponseMessage('User Deleted Successfully')
  async deleteUser(@Param() body: DeleteUserDto) {
    //   handles the delete request to /users/:id endpoint to delete a user
    await this.userService.deleteUser(body);
  }
}
