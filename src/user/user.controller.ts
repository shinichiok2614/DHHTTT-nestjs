import { Controller, Get, UseGuards, Patch, Body } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../decorator';
import { MyJWTGuard } from '../guard';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto';
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJWTGuard)
  @Get('me')
  // me(@Req() request: Request) {
  me(@GetUser() user: User) {
    // console.log(JSON.stringify(Object.keys(request)));
    // console.log(request.user);
    // return 'My Detail infomation';
    // return request.user;
    return user;
  }
  @UseGuards(MyJWTGuard)
  @Get('about')
  getUserById(@GetUser('sub') userId: number) {
    return this.userService.getUserById(userId);
  }
  @UseGuards(MyJWTGuard)
  @Patch()
  updateUserById(
    @GetUser('sub') userId: number,
    @Body() updateUserDTO: UpdateUserDTO,
  ) {
    console.log(userId);
    console.log(updateUserDTO);
    return this.userService.updateUser(userId, updateUserDTO);
  }
}
