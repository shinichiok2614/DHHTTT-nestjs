import { Body, Controller, Post } from '@nestjs/common';
import { TinhtrangService } from './tinhtrang.service';
import { InsertTinhTrangDTO } from './dto';

@Controller('tinhtrang')
export class TinhtrangController {
  constructor(private tinhTrangService: TinhtrangService) {}
  @Post()
  insertTinhTrang(@Body() insertTinhTrang: InsertTinhTrangDTO) {
    return this.tinhTrangService.insertTinhTrang(insertTinhTrang);
  }
}
