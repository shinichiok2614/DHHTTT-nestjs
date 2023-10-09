import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { MyJWTGuard } from 'src/guard';
import { BaidangService } from './baidang.service';
import { InsertBaiDangDTO } from './dto/insert.baidang.dto';

@UseGuards(MyJWTGuard)
@Controller('baidang')
export class BaidangController {
  constructor(private baidangService: BaidangService) {}
  @Post()
  insertBaidang(@Body() insertBaiDangDTO: InsertBaiDangDTO) {
    return this.baidangService.insertBaiDang(insertBaiDangDTO);
  }
  // @Get()
  // getBaidang()
}
