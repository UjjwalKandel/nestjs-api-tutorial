import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGaurd } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('users')
@UseGuards(JwtGaurd)
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
