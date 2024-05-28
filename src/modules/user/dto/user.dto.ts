import { IsUUID } from 'class-validator';

export class GetUserByIdDto {
  @IsUUID()
  id: string;
}

export class UpdateUserIdDto extends GetUserByIdDto {}
export class DeleteUserDto extends GetUserByIdDto {}
