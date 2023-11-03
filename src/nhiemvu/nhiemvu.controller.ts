import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  Get,
} from '@nestjs/common';
import { NhiemvuService } from './nhiemvu.service';
import { InsertNhiemVuDTO } from './dto';
import { MyJWTGuard } from 'src/guard';
import { Transform } from 'class-transformer';
import { AdminGuard } from 'src/guard/admin.guard';
import { GetUser } from 'src/decorator';
import { UserService } from 'src/user/user.service';

// @UseGuards(MyJWTGuard)
@Controller('nhiemvu')
export class NhiemvuController {
  constructor(
    private nhiemVuService: NhiemvuService,
    private userService: UserService,
  ) {}
  @Get()
  @UseGuards(MyJWTGuard)
  // @UseGuards(AdminGuard)
  async getNhiemVu(@GetUser('sub') userId: number) {
    const user = await this.userService.getUserById(userId);
    // console.log(user.idAdmin);
    if (user.idAdmin == 1) return this.nhiemVuService.getNhiemVu();
  }

  @Post()
  insertNhiemVu(@Body() insertNhiemVuDTO: InsertNhiemVuDTO) {
    return this.nhiemVuService.insertNhiemVu(insertNhiemVuDTO);
  }
}
