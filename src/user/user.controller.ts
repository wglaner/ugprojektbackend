import { Body, Controller, Delete, Get, Param, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto } from '../dto/login-user.dto';
import { RegisterUserDto } from '../dto/register-user.dto';
import { AuthService } from './auth.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  showAllUsers() {
    return this.userService.getUsers();
  }
  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: LoginUserDto) {
    return this.userService.login(data);
  }
  @Post('register')
  async register(@Body() userData: RegisterUserDto) {
    const result = await this.userService.register(userData);
    return {
      _id: result._id,
      first_name: result.first_name,
      last_name: result.last_name,
      email: result.email,
      role: result.role,
    };
  }
  @Delete(':id')
  deleteByEmail(@Param() params) {
    return this.userService.deleteById(params.id);
  }

  @Delete('')
  delete() {
    return this.userService.delete();
  }
}
