import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { NhiemvuService } from './nhiemvu.service';
import { InsertNhiemVuDTO } from './dto';
import { MyJWTGuard } from 'src/guard';
import { Transform } from 'class-transformer';

// @UseGuards(MyJWTGuard)
@Controller('nhiemvu')
export class NhiemvuController {
  constructor(private nhiemVuService: NhiemvuService) {}
  @Post()
  insertNhiemVu(@Body() insertNhiemVuDTO: InsertNhiemVuDTO) {
    return this.nhiemVuService.insertNhiemVu(insertNhiemVuDTO);
  }
}
